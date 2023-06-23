import { atom } from 'recoil'
import { loginStateEffect } from '../effects/loginStateEffect'

export const loginState = atom({
    key: 'currentUserToken',
    default: "",
    effects: [
        loginStateEffect(
            "token"
        )],
})