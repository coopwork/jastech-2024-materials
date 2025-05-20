import { Card, CardContent } from '@/components/ui/card.tsx';
import { PostType } from '@/utils/types/post.type.ts';
import { Link } from 'react-router-dom';
import { PATHS } from '@/utils/constants/paths.ts';

type PropsType = {
  post: PostType;
};

const PostCard = ({ post }: PropsType) => {
  return (
    <Card className='relative p-0 overflow-hidden'>
      <Link
        className='absolute top-0 left-0 bottom-0 right-0'
        to={PATHS.POST_ID(post.id)}
      />
      <img
        className='w-full aspect-video object-cover'
        src={post.thumbnail}
        alt={post.title}
      />
      <CardContent className='p-2.5'>
        <h6 className='w-full text-ellipsis overflow-hidden text-nowrap font-semibold text-lg'>
          {post.title}
        </h6>
        <p className='w-full text-xs mt-2.5 line-clamp-3'>{post.content}</p>
      </CardContent>
    </Card>
  );
};

export default PostCard;
