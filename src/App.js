import React, { useState, useEffect } from 'react';
import Router from './routes/Router';
import { useRecoilValue } from 'recoil';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Toast from './components/Toast/Toast';
import queryClient from './util/queryClient';
import { recoilData } from './recoil/atoms/dataState';
import { instance, setupInterceptor } from './util/api/axiosInstance';
import { useToast } from './hooks/useModal';

function App() {
  const [isReady, setIsReady] = useState(false);
  const token = useRecoilValue(recoilData).token;
  const { toast } = useToast();

  useEffect(() => {
    const interceptorId = setupInterceptor(token);
    setIsReady(true);
    return () => {
      instance.interceptors.request.eject(interceptorId);
    };
  }, [token]);

  return (
    isReady && (
      <div>
        <QueryClientProvider client={queryClient}>
          <Router />
          <Toast {...toast} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </div>
    )
  );
}

export default App;
