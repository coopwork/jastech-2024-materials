import { useQuery } from '@tanstack/react-query';
import getUserById from '@/utils/api/json-placeholder/requests/get/get-user-by-id.ts';

export default function useGetUserById(id: string | number) {
  const { data, isPending, isError } = useQuery({
    queryKey: ['user', id],
    queryFn: () => {
      return getUserById(id);
    },
    staleTime: 1000 * 60 * 10,
  });

  return { data, isPending, isError };
}
