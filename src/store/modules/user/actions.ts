import { action } from "typesafe-actions";
import { UserActionTypes } from "./types";

export const userActions = {
    setAvatar: (avatarId: number) => action(UserActionTypes.setAvatar, {avatarId}),
    setUsername: (username: string) => action(UserActionTypes.setUsername, {username}),
    auth: () => action(UserActionTypes.auth)
}