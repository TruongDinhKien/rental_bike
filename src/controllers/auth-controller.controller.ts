import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  model,
  property,
  repository,
  Where,
} from '@loopback/repository'
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
  SchemaObject,
  HttpErrors,
} from '@loopback/rest'
import {  Users } from '../models'
import { UserRepository } from '../repositories'
import { UserService, authenticate } from '@loopback/authentication'
import { PasswordHasherBindings, UserServiceBindings } from '../keys'
import { inject, intercept, Interceptor } from '@loopback/core'
import { SecurityBindings, UserProfile } from '@loopback/security'
import { JWTService, PasswordHasher } from '../services'
import { Credentials, TokenServiceBindings } from '@loopback/authentication-jwt'
import { genSalt, hash } from 'bcryptjs'
import _ from 'lodash'

@model()
export class NewUserRequest extends Users {
  @property({
    type: 'string',
    required: true,
  })
  password: string
}

@model()
export class UserRes extends Users {
  roleName?: string
}

const CredentialsSchema: SchemaObject = {
  type: 'object',
  required: ['email', 'password'],
  properties: {
    email: {
      type: 'string',
      format: 'email',
    },
    password: {
      type: 'string',
      minLength: 5,
    },
  },
}

export const CredentialsRequestBody = {
  description: 'The input of login function',
  required: true,
  content: {
    'application/json': { schema: CredentialsSchema },
  },
}

const newUserRequestDefaultRole: Interceptor = async (invocationCtx: any, next) => {
  if (invocationCtx.args[0]) invocationCtx.args[0].roles = ['user']
  const result = await next()
  return result
}

export class AuthController {
  constructor(
    @inject(TokenServiceBindings.TOKEN_SERVICE)
    public jwtService: JWTService,
    @inject(UserServiceBindings.USER_SERVICE)
    public userService: UserService<Users, Credentials>,
    @inject(SecurityBindings.USER, { optional: true })
    public user: UserProfile,
    @repository(UserRepository)
    protected userRepository: UserRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public passwordHasher: PasswordHasher,
  ) {}

  @post('/users')
  @response(200, {
    description: 'User model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Users) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Users, {
            title: 'NewUser',
            exclude: ['id'],
          }),
        },
      },
    })
    user: Omit<Users, 'id'>,
  ): Promise<Users> {
    return this.userRepository.create(user)
  }

  @get('/users/count')
  @response(200, {
    description: 'User model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(@param.where(Users) where?: Where<Users>): Promise<Count> {
    return this.userRepository.count(where)
  }

  @get('/users')
  @response(200, {
    description: 'Array of User model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Users, { includeRelations: false }),
        },
      },
    },
  })
  async find(@param.filter(Users) filter?: Filter<Users>): Promise<Users[]> {
    return this.userRepository.find(filter)
  }

  @patch('/users')
  @response(200, {
    description: 'User PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Users, { partial: true }),
        },
      },
    })
    users: Users,
    @param.where(Users) where?: Where<Users>,
  ): Promise<Count> {
    return this.userRepository.updateAll(users, where)
  }

  @get('/users/{id}')
  @response(200, {
    description: 'User model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef( UserRes, { includeRelations: false }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(UserRes, { exclude: 'where' }) filter?: FilterExcludingWhere<Users>,
  ): Promise<UserRes> {
    const user: UserRes = await this.userRepository.findById(id, { ...filter })
    return user
  }

  @patch('/users/{id}')
  @response(204, {
    description: 'User PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Users, { partial: true }),
        },
      },
    })
    users: Users,
  ): Promise<void> {
    console.log(users);
    await this.userRepository.updateById(id, users)
  }

  @put('/users/{id}')
  @response(204, {
    description: 'User PUT success',
  })
  async replaceById(@param.path.string('id') id: string, @requestBody() users: Users): Promise<void> {
    await this.userRepository.replaceById(id, users)
  }

  @del('/users/{id}')
  @response(204, {
    description: 'User DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.userRepository.deleteById(id)
  }

  @post('/users/login', {
    responses: {
      '200': {
        description: 'Token',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                token: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  })
  async login(@requestBody(CredentialsRequestBody) credentials: Credentials): Promise<any> {
    // ensure the user exists, and the password is correct
    const user = await this.userService.verifyCredentials(credentials)
    // convert a User object into a UserProfile object (reduced set of properties)
    const userProfile = this.userService.convertToUserProfile(user)
    // create a JSON Web Token based on the user profile
    const token = await this.jwtService.generateToken(userProfile)
    return { token, ...user }
  }

  @authenticate('jwt')
  @get('/profiles', {
    responses: {
      '200': {
        description: 'Return current user',
        content: {
          'application/json': {
            schema: {
              type: 'string',
            },
          },
        },
      },
    },
  })
  async profiles(
    @inject(SecurityBindings.USER)
    currentUserProfile: UserProfile,
  ): Promise<any> {
    console.log(currentUserProfile, 'currentUserProfile')
    return currentUserProfile
  }

  @intercept(newUserRequestDefaultRole)
  @post('/signup', {
    responses: {
      '200': {
        description: 'User',
        content: {
          'application/json': {
            schema: {
              'x-ts-type': NewUserRequest,
            },
          },
        },
      },
    },
  })
  async signUp(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NewUserRequest, {
            title: 'Create new account',
            exclude: ['id', 'roles'],
          }),
        },
      },
    })
    newUserRequest: Omit<NewUserRequest, 'id'>,
  ): Promise<Users> {
    const existEmailError = 'Email already exists'
    // if email already exists
    const user = await this.userRepository.find({
      where: { email: newUserRequest.email },
    })
    if (user.length > 0) throw new HttpErrors.Forbidden(existEmailError)

    const password = await hash(newUserRequest.password, await genSalt())
    const savedUser = await this.userRepository.create(_.omit(newUserRequest, 'password'))

    await this.userRepository.userCredentials(savedUser.id).create({ password })

    return savedUser
  }
}
