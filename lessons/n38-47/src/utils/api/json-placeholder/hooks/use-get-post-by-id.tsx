import { useQuery } from '@tanstack/react-query';
import getPostById from '@/utils/api/json-placeholder/requests/get/get-post-by-id.ts';

export default function useGetPostById(id: string | number) {
  const { data, isPending, isError } = useQuery({
    queryKey: ['post', id],
    queryFn: () => {
      return getPostById(id);
    },
    staleTime: 1000 * 60 * 10,
  });

  return { data, isPending, isError };
}
