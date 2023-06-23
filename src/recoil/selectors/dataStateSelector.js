import { selector } from 'recoil';
import { dataAccountName } from '../atoms/dataState';

export const dataAccountNameSelector = selector({
    key: 'currentAccountData',
    get: ({ get }) => {
        const recoilAccountName = get(dataAccountName);
        return recoilAccountName;
    }
})