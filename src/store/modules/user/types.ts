export const UserActionTypes = {
    setAvatar: '@USER/SET_AVATAR',
    setUsername: '@USER/SET_USERNAME',
    auth: '@USER/AUTH'
}

export interface IUserRootState {
    FCM_USER_TOKEN: string,
    avatar: number,
    name: string,
}