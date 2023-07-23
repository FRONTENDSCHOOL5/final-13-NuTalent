import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { instance } from '../../util/api/axiosInstance';

const getProducts = async (accountname) => {
  const { data } = await instance.get(`/product/${accountname}`);
  return data.product;
};

const deleteProduct = async (productId) => {
  const { data } = await instance.delete(`/product/${productId}`);
  return data;
};

export const useGetProducts = (accountname) => {
  const { data: products } = useQuery({
    queryKey: ['product', accountname],
    queryFn: () => getProducts(accountname),
    placeholderData: [],
  });
  return { products };
};

export const useDeleteProduct = (accountname) => {
  const queryClient = useQueryClient();

  const { mutate: deleteProductMutate } = useMutation({
    mutationFn: (productId) => deleteProduct(productId),
    onSuccess: () => queryClient.invalidateQueries(['product', accountname]),
  });

  return { deleteProductMutate };
};
