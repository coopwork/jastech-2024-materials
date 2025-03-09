import { jsonPlaceholderAPI } from '@/utils/api/json-placeholder/instance.ts';
import { ENDPOINTS } from '@/utils/constants/endpoints.ts';
import { PostType } from '@/utils/types/post.type.ts';

export default function getPosts(): Promise<PostType[]> {
  return jsonPlaceholderAPI
    .get(ENDPOINTS.JSON_PLACEHOLDER.GET.POSTS)
    .then((res) => res.data);
}
