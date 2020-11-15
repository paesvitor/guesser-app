export const UiActionTypes = {
    setAppBackgroundColor: '@UI/SET_APP_BACKGROUND_COLOR',
    setAppBackgroundImage: '@UI/SET_APP_BACKGROUND_IMAGE',
}

export interface IUiRootState {
    backgroundColor: string,
    backgroundImage: string,
}