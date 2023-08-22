import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Toast from './components/Toast/Toast';
import Alert from './components/common/Alert/Alert';
import Router from './routes/Router';
import queryClient from './util/queryClient';
import { recoilData } from './recoil/atoms/dataState';
import { instance, setupInterceptor } from './util/api/axiosInstance';
import { useAlert, useBottomSheet, useToast } from './hooks/useModal';
import BottomSheetModal from './components/common/BottomSheetModal/BottomSheetModal';

function App() {
  const [isReady, setIsReady] = useState(false);
  const token = useRecoilValue(recoilData).token;
  const { toast } = useToast();
  const { alert } = useAlert();
  const { bottomSheet } = useBottomSheet();

  useEffect(() => {
    const interceptorId = setupInterceptor(token);
    setIsReady(true);
    return () => {
      instance.interceptors.request.eject(interceptorId);
    };
  }, [token]);

  return (
    isReady && (
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Router />
          <Toast {...toast} />
          <Alert {...alert} />
          <BottomSheetModal {...bottomSheet} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
    )
  );
}

export default App;
