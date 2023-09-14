import { useMutation } from '@tanstack/react-query';
import { instance } from '../../util/api/axiosInstance';

const useSignUp = () => {
  return useMutation({
    mutationFn: ({ email }) =>
      instance.post('/user/emailvalid', JSON.stringify({ user: { email } }), {
        headers: { 'Content-type': 'application/json' },
      }),
    onError: (error) => {
      alert(`${error.response.data.message}`);
    },
  });
};

export default useSignUp;
