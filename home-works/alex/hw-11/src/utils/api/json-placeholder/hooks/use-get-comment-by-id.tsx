import { useQuery } from '@tanstack/react-query';
import getCommentById from '@/utils/api/json-placeholder/requests/get/get-comment-by-id';

export default function useGetCommentById(postId: string | number) {
  const { data, isPending, isError } = useQuery({
    queryKey: ['comment', postId],
    queryFn: () => {
      return getCommentById(postId);
    },
    staleTime: 1000 * 60 * 10,
  });

  return { data, isPending, isError };
}
