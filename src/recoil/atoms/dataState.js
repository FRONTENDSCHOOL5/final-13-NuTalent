import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const recoilData = atom({
  key: 'recoilData',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
