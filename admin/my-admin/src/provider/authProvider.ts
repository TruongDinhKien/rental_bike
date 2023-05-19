import {AuthProvider, UserIdentity} from 'react-admin';
import * as api from '../api';


const authProvider: AuthProvider = {
  login: ({username, password}: UserIdentity) => {
    return api.login({username, password})
  },
  logout: () => {
    return api.logout()
  },
  checkAuth: () =>
    localStorage.getItem('username') ? Promise.resolve() : Promise.reject(),
  checkError: (error: any) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  getIdentity: async () => {
    const res: any = await api.getIdentity();
    return Promise.resolve({
      id: res.id,
      fullName: res.name,
    })
  },
  getPermissions: () => {
    // const user = storage.load('auth')
    // const isAdmin = _.get(user, 'isAdmin', false)
    // const teams = _.get(user, 'teams', {})
    // const team = _.get(user, 'team', {})
    // const permissions = {
    //   isAdmin,
    //   ...teams[0],
    //   ...team,
    // }
    return Promise.resolve('')
  },
};

export default authProvider;
