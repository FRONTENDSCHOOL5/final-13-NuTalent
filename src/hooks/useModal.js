import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { toastState, alertState } from '../recoil/atoms/modalState';

export const useToast = () => {
  const [toast, setToast] = useRecoilState(toastState);

  const openToast = ({ message, status = 'success', duration = 2000 }) => {
    setToast({
      isOpen: true,
      message: message,
      status: status,
      duration: duration,
    });
  };

  useEffect(() => {
    if (toast.isOpen) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, isOpen: false }));
      }, toast.duration);

      return () => clearTimeout(timer);
    }
  }, [toast]);

  useEffect(() => {
    return () => {
      setToast((prev) => ({ ...prev, isOpen: false }));
    };
  }, []);

  return { toast, openToast };
};

export const useAlert = () => {
  const [alert, setAlert] = useRecoilState(alertState);

  const openAlert = ({ title, actionText, actionFunction }) => {
    setAlert({
      isOpen: true,
      title: title,
      actionText: actionText,
      actionFunction: actionFunction,
      onClose: closeAlert,
    });
  };

  const closeAlert = () => {
    setAlert((prev) => ({ ...prev, isOpen: false }));
  };

  return { alert, openAlert, closeAlert };
};
