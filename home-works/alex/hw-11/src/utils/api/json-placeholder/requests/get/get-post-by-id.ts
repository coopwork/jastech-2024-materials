import { jsonPlaceholderAPI } from '@/utils/api/json-placeholder/instance.ts';
import { ENDPOINTS } from '@/utils/constants/endpoints.ts';
import { PostType } from '@/utils/types/post.type.ts';

export default function getPostById(id: string | number): Promise<PostType> {
  return jsonPlaceholderAPI
    .get(ENDPOINTS.JSON_PLACEHOLDER.GET.POST_BY_ID(id))
    .then((res) => res.data);
}
