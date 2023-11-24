import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export function useCreateCabin() {
  const queruClient = useQueryClient();

  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: (newCabin) => createEditCabin(newCabin),

    onSuccess: () => {
      toast.success('New cabin successfully created');
      queruClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}
