export interface AuthModel {
    email: string,
    password: string
}

export interface RegisterModel {
    fullName: string,
    dateOfBirth: string,
    phone: string,
    idRole: boolean,
    email: string,
    password: string,
}

export interface UserResponse {
    token: string
    userAccount: {
        fullName: string,
        dateOfBirth: string,
        phone: string,
        idRole: boolean,
        email: string
    }
}

export interface VerifyPayload {
    otp: string
}

export interface User {
    fullName: string,
    dateOfBirth: string
    phone: string
    idRole: boolean
    email: string
}

export const UserDTO = (user: UserResponse): User => {
    const { userAccount } = user
    return userAccount
}
