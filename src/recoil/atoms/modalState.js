import { atom } from 'recoil';

export const toastState = atom({
  key: 'toastState',
  default: {
    isOpen: false,
    status: null,
    message: null,
    duration: 3000,
  },
});
