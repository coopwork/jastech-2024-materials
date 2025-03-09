import { CreatePostRequestType, PostType } from '@/utils/types/post.type.ts';
import { jsonPlaceholderAPI } from '@/utils/api/json-placeholder/instance.ts';
import { ENDPOINTS } from '@/utils/constants/endpoints.ts';

export default async function postPost(
  body: CreatePostRequestType,
): Promise<PostType> {
  const BODY = {
    id: (Math.random() * 1000).toFixed(),
    slug: 'lorem-ipsum',
    url: 'https://jsonplaceholder.org/posts/lorem-ipsum',
    thumbnail:
      'https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org',
    image:
      'https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org',
    status: 'published',
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    userId: 1,
    ...body,
  };
  return await jsonPlaceholderAPI
    .post(ENDPOINTS.JSON_PLACEHOLDER.POST.POSTS, BODY)
    .then((res) => res.data);
}
