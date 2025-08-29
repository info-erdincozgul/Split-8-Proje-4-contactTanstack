import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import {
  fetchContacts,
  fetchContactById,
  deleteContact,
  createContact,
} from './api';

export const useFetchContacts = () => {
  return useQuery({
    queryKey: ['contacts', 'list'],
    queryFn: fetchContacts,
  });
};

export const useFetchContactById = (id) => {
  return useQuery({
    queryKey: ['contacts', 'detail', id],
    queryFn: () => fetchContactById(id),
  });
};

export const useDeleteContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteContact(id),
    onSuccess: async (data, variables) => {
      await queryClient.invalidateQueries({
        queryKey: ['contacts', 'detail', variables.id],
      });
      await queryClient.invalidateQueries({
        queryKey: ['contacts', 'list'],
      });
    },
  });
};

export const useCreateContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createContact(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['contacts', 'list'] });
    },
  });
};
