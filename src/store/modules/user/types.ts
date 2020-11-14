export const UserActionTypes = {
    setAvatar: '@USER/SET_AVATAR',
    setUsername: '@USER/SET_USERNAME'
}

export interface IUserRootState {
    avatar: number,
    name: string
}