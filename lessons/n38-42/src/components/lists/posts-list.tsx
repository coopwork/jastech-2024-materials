import PostCard from '@/components/cards/post-card.tsx';
import PostCardSkeleton from '@/components/skeletons/post-card.skeleton.tsx';
import { PostType } from '@/utils/types/post.type.ts';

type PropsType = {
  posts: PostType[];
  isLoading: boolean;
};

const PostsList = ({ posts, isLoading }: PropsType) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
      {isLoading ? (
        [...Array(12)].map((_, i) => <PostCardSkeleton key={i} />)
      ) : posts?.length ? (
        posts?.map((post) => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))
      ) : (
        <h2 className='lg:col-span-4 text-3xl h-48 font-semibold text-foreground/50 flex items-center justify-center'>
          Список постов пуст
        </h2>
      )}
    </div>
  );
};

export default PostsList;
