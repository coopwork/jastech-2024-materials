import { useQuery } from '@tanstack/react-query';
import getPosts from '@/utils/api/json-placeholder/requests/get/get-posts.ts';

export default function useGetPosts() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    staleTime: 1000 * 60 * 10,
  });

  return { data, isPending, isError };
}
