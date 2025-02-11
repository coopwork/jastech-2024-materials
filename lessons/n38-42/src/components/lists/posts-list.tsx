import useGetPosts from '@/utils/api/json-placeholder/hooks/use-get-posts.tsx';
import PostCard from '@/components/cards/post-card.tsx';

const PostsList = () => {
  const { data } = useGetPosts();

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
      {data?.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

export default PostsList;
