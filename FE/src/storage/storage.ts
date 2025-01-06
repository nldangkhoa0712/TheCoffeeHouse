interface User {
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    phone: string,
    idRole: string,
    email: string
}

import KEY_STORAGE from "./storageConstants"

export const get = <T>(key: string): T | undefined => {
    try {
        if (typeof window !== "undefined" && window?.localStorage) {
            const data = window.localStorage.getItem(key)
            if (data) {
                return JSON.parse(data) as T
            }
        }
    } catch (error) {
        console.log(`Error parsing JSON for key ${key}:`, error)
    }
}

export const set = <T>(key: string, data: T): void => {
    localStorage.setItem(key, JSON.stringify(data))
}

export const setAccessToken = (token: string) => {
    set(KEY_STORAGE.ACCESS_TOKEN, token)
}

export const getAccessToken = () => {
    const accessToken = get(KEY_STORAGE.ACCESS_TOKEN)
    return accessToken
}

export const getUser = () => {
    const userAccount = get<User>(KEY_STORAGE.USER_ACCOUNT)
    if (!userAccount) throw new Error("User Account not found")
    return userAccount
}

const deleteUser = (key: string) => {
    localStorage.removeItem(key)
}

const deleteAccessToken = (key: string) => {
    localStorage.removeItem(key)
}

const setUser = (user?: User) => {
    if (!user) {
        deleteUser(KEY_STORAGE.USER_ACCOUNT)
        deleteAccessToken(KEY_STORAGE.ACCESS_TOKEN)
        return
    }
    set(KEY_STORAGE.USER_ACCOUNT, user)
}

export { setUser }