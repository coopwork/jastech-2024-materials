import useGetPosts from '@/utils/api/json-placeholder/hooks/use-get-posts.tsx';
import PostCard from '@/components/cards/post-card.tsx';
import { useEffect, useState } from 'react';
import { PostType } from '@/utils/types/post.type.ts';

type PropsType = {
  limit: number;
  hideId: number | string | undefined;
};

const AnotherPostsList = ({ limit, hideId }: PropsType) => {
  const { data } = useGetPosts();
  const [filteredPosts, setFilteredPosts] = useState<PostType[]>(data || []);

  useEffect(() => {
    if (data?.length && !isNaN(Number(hideId))) {
      const filteredAndSortedPosts = data?.filter(
        (post) => post.id !== Number(hideId),
      );
      setFilteredPosts(filteredAndSortedPosts?.slice(0, limit));
    }
  }, [data, hideId]);

  return (
    <div className='flex flex-col gap-4'>
      {filteredPosts?.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

export default AnotherPostsList;
