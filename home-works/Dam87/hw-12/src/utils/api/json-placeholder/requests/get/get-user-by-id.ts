import { jsonPlaceholderAPI } from '@/utils/api/json-placeholder/instance.ts';
import { ENDPOINTS } from '@/utils/constants/endpoints.ts';
import { UserType } from '@/utils/types/user.type.ts';

export default function getUserById(id: string | number): Promise<UserType> {
  return jsonPlaceholderAPI
    .get(ENDPOINTS.JSON_PLACEHOLDER.GET.USER_BY_ID(id))
    .then((res) => res.data);
}
