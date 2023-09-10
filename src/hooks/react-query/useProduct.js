import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { instance } from '../../util/api/axiosInstance';

const createProduct = async (product) => {
  const { data } = await instance.post('/product', { product });
  return data.product;
};

const getProducts = async (accountname) => {
  const { data } = await instance.get(`/product/${accountname}`);
  return data.product;
};
const getDetailProducts = async (id) => {
  const { data } = await instance.get(`/product/detail/${id}`);
  return data.product;
};

const updateProduct = async (id, product) => {
  const { data } = await instance.put(`/product/${id}`, { product });
  return data;
};

const deleteProduct = async (productId) => {
  const { data } = await instance.delete(`/product/${productId}`);
  return data;
};

export const useCreateProduct = () => {
  const navigate = useNavigate();

  const { mutate: createProductMutate } = useMutation({
    mutationFn: (product) => createProduct(product),
    onSuccess: () => navigate(-1),
  });

  return { createProductMutate };
};

export const useGetProducts = (accountname) => {
  const { data: products } = useQuery({
    queryKey: ['product', accountname],
    queryFn: () => getProducts(accountname),
    placeholderData: [],
  });
  return { products };
};
export const useGetDetailProducts = (id) => {
  const { data: products } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getDetailProducts(id),
    placeholderData: [],
  });
  return { products };
};

export const useUpdateProduct = (id) => {
  const navigate = useNavigate();

  const { mutate: updateProductMutate } = useMutation({
    mutationFn: (product) => updateProduct(id, product),
    onSuccess: () => navigate(-1),
  });

  return { updateProductMutate };
};

export const useDeleteProduct = (accountname) => {
  const queryClient = useQueryClient();

  const { mutate: deleteProductMutate } = useMutation({
    mutationFn: (productId) => deleteProduct(productId),
    onSuccess: () => queryClient.invalidateQueries(['product', accountname]),
  });

  return { deleteProductMutate };
};
