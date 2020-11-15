import { action } from "typesafe-actions";
import { UiActionTypes } from "./types";

export const uiActions = {
    setAppBackgroundColor: (backgroundColor: string) => action(UiActionTypes.setAppBackgroundColor, {backgroundColor}),
}