import { atom } from 'recoil'
import { localStorageEffect } from '../../util/localStorageEffect'

export const currentUserToken = atom({
    key: 'currentUserToken',
    default: "",
    effects: [
        localStorageEffect(
            "token"
        )],
})