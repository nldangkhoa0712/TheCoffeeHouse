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

export interface SetNewPassword {
    otp: string
    newPassword: string
    email: string
}

export interface UserInfo {
    fullName: string,
    dateOfBirth: string,
    email: string,
    phoneNumber: string,
    role: boolean,
    id: number,
    orderedCount: number
}