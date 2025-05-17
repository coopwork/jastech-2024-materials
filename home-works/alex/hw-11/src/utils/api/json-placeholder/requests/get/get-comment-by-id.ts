
import { jsonPlaceholderAPI } from '@/utils/api/json-placeholder/instance.ts';
import { ENDPOINTS } from '@/utils/constants/endpoints.ts';
import { CommentType } from '@/utils/types/comment.type';

export default function getCommentById(id: string | number): Promise<CommentType> {
  return jsonPlaceholderAPI
    .get(ENDPOINTS.JSON_PLACEHOLDER.GET.COMMENT_BY_ID(id))
    .then((res) => res.data);
}
