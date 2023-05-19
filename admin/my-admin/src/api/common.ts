import axios, {AxiosInstance, ResponseType} from "axios"

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {'Content-Type': 'application/json; charset=UTF-8'}
})

export const apiGet = async <Type>(
    path: string,
    params: Record<string, any> = {},
    headers: Record<string, string> = {},
    responseType: ResponseType = 'json',
    client: AxiosInstance = apiClient,
    withCredentials: boolean = false,
): Promise<Type> => {
    try {
        // console.log('[GET]', { path, params })
        const resp = await client.get<Type>(path, {params, headers, responseType, withCredentials})
        console.log('SERVER response', resp)
        return resp.data
    } catch (error: any) {
        console.log('error.config', error.config)
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log('error.response.data', error.response.data)
            console.log('error.response.status', error.response.status)
            console.log('error.response.headers', error.response.headers)
            throw error.response.data.error
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request)
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message)
        }
        throw error
    }
}


export const apiPost = async <T>(
    path: string,
    body: Record<string, any> = {},
    params: Record<string, any> = {},
    headers: Record<string, string> = {},
    responseType: ResponseType = 'json',
    client: AxiosInstance = apiClient,
    withCredentials: boolean = false,
): Promise<T> => {
    try {
        console.log('[Post]', body, {path, params})
        const resp = await client.post(path, body, {params, headers, responseType, withCredentials})
        console.log('SERVER response', resp)
        return resp.data
    } catch (error: any) {
        console.log('error.config', error.config)
        if (error.response) {
            if (error.response.status === 401)
                alert('Invalid email or password')
            if (error.response.status === 422)
                alert('Password at least 8 characters required')
            console.log('error.response.status', error.response.status)
            console.log('error.response.headers', error.response.headers)
            throw error.response.data.error
        } else if (error.request) {
            console.log(error.request)
        } else {
            console.log('Error', error.message)
        }
        throw error
    }
}

export const apiDelete = async <T>(
    path: string,
    params: Record<string, any> = {},
    headers: Record<string, string> = {},
    responseType: ResponseType = 'json',
    client: AxiosInstance = apiClient
): Promise<T> => {
    try {
        console.log('[Delete]', {path, params})
        const resp = await client.delete(path, {params, headers, responseType})
        console.log('SERVER response', resp)
        return resp.data
    } catch (error: any) {
        console.log('error.config', error.config)
        if (error.response) {
            console.log('error.response.data', error.response.data)
            console.log('error.response.status', error.response.status)
            console.log('error.response.headers', error.response.headers)
            throw error.response.data.error
        } else if (error.request) {
            console.log(error.request)
        } else {
            console.log('Error', error.message)
        }
        throw error
    }
}

export const apiPut = async <T>(
    path: string,
    data: Record<string, any> = {},
    params: Record<string, any> = {},
    headers: Record<string, string> = {},
    responseType: ResponseType = 'json',
    client: AxiosInstance = apiClient
): Promise<T> => {
    try {
        console.log('[Put]', {path, params})
        const resp = await client.put(path, data, {headers, params, responseType})
        console.log('SERVER response', resp)
        return resp.data
    } catch (error: any) {
        console.log('error.config', error.config)
        if (error.response) {
            alert('error.response.data' + error.response.data)
            console.log('error.response.status', error.response.status)
            console.log('error.response.headers', error.response.headers)
            throw error.response.data.error
        } else if (error.request) {
            console.log(error.request)
        } else {
            console.log('Error', error.message)
        }
        throw error
    }
}

export const apiPatch = async <T>(
    path: string,
    data: Record<string, any> = {},
    params: Record<string, any> = {},
    headers: Record<string, string> = {},
    responseType: ResponseType = 'json',
    client: AxiosInstance = apiClient
): Promise<T> => {
    try {
        console.log('[Patch]', {path, params})
        const resp = await client.patch(path, data, {headers, params, responseType})
        console.log('SERVER response', resp)
        return resp.data
    } catch (error: any) {
        console.log('error.config', error.config)
        if (error.response) {
            alert('error.response.data' + error.response.data)
            console.log('error.response.status', error.response.status)
            console.log('error.response.headers', error.response.headers)
            throw error.response.data.error
        } else if (error.request) {
            console.log(error.request)
        } else {
            console.log('Error', error.message)
        }
        throw error
    }
}
