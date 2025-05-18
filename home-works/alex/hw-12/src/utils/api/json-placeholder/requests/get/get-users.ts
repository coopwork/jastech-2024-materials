import { jsonPlaceholderAPI } from '@/utils/api/json-placeholder/instance.ts';
import { ENDPOINTS } from '@/utils/constants/endpoints.ts';
import { UserType } from '@/utils/types/user.type.ts';

export default function getUsers(): Promise<UserType[]> {
  return jsonPlaceholderAPI
    .get(ENDPOINTS.JSON_PLACEHOLDER.GET.USERS)
    .then((res) => res.data);
}





