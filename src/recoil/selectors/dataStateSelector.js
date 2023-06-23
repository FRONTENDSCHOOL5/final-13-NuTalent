import { selector } from 'recoil';
import { recoilData } from '../atoms/dataState';

export const dataAccountNameSelector = selector({
    key: 'currentAccountData',
    get: ({ get }) => {
        const recoilAccountName = get(recoilData.user.accountname);
        const recoilUserId = get(recoilData.user.userid);

        return recoilAccountName, recoilUserId;
    }
})