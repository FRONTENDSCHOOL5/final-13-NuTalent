import { QueryClient, QueryCache } from '@tanstack/react-query';

// TODO: toast 만들어서 사용하기
const queryErrorHandler = (error) => {
  const title =
    error instanceof Error ? error.message : 'error connecting to server';

  console.error(title);
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: queryErrorHandler,
    },
  },
  queryCache: new QueryCache({
    onError: queryErrorHandler,
  }),
});

export default queryClient;
