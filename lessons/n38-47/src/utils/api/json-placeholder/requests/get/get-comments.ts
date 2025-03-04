import { jsonPlaceholderAPI } from '@/utils/api/json-placeholder/instance.ts';
import { ENDPOINTS } from '@/utils/constants/endpoints.ts';
import { CommentType } from '@/utils/types/comment.type.ts';

export default function getComments(): Promise<CommentType[]> {
  return jsonPlaceholderAPI
    .get(ENDPOINTS.JSON_PLACEHOLDER.GET.COMMENTS)
    .then((res) => res.data);
}
