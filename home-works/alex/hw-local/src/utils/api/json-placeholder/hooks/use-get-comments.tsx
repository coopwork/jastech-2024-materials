import { useQuery } from '@tanstack/react-query';
import getComments from '@/utils/api/json-placeholder/requests/get/get-comments.ts';

export default function useGetComments() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['comments'],
    queryFn: getComments,
    staleTime: 1000 * 60 * 10,
  });

  return { data, isPending, isError };
}
