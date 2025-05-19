import { useQuery } from '@tanstack/react-query';
import getUsers from '@/utils/api/json-placeholder/requests/get/get-users.ts';

export default function useGetUsers() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: 1000 * 60 * 10,
  });

  return { data, isPending, isError };
}
