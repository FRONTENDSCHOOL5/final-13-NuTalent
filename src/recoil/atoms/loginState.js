import { atom } from 'recoil'
import { loginStateEffect } from '../../util/loginStateEffect/loginStateEffect'

export const loginState = atom({
    key: 'currentUserToken',
    default: "",
    effects: [
        loginStateEffect(
            "token"
        )],
})