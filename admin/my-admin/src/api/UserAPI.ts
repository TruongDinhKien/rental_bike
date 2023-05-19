import {apiGet, apiPost} from './common';

export type TUser = {
    username: string;
    password: string;
}

export type TToken = {
    token: string;
}

export const login = async (user: TUser) => {
    try {
        const res = await apiPost<TToken>('/users/login', {email: user.username, password: user.password})
        sessionStorage.setItem('token', res.token);
        localStorage.setItem('username', user.username)
        return Promise.resolve()
    } catch (error) {
        return Promise.reject()
    }
}

export const register = async (user: TUser) => {
    try {
        const body = {...user}
        await apiPost('/signup', body)
        window.location.href = "/login";
    } catch (error: any) {
        console.log(error)
    }
}

export const logout = () => {
    sessionStorage.removeItem('token');
    localStorage.removeItem('username');
    return Promise.resolve();
}

export const getToken = () => {
    return sessionStorage.getItem('token');
}

export const getIdentity = async () => {
    return await apiGet('/whoAmI', {}, {'Authorization': `Bearer ${getToken()}`});
}


