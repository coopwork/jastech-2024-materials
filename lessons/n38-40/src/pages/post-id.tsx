import { useParams } from 'react-router-dom';
import useGetPostById from '@/utils/api/json-placeholder/hooks/use-get-post-by-id.tsx';

const PostId = () => {
  const { postId } = useParams();
  const { data } = useGetPostById(`${postId}`);
  return (
    <div>
      <pre className='text-pretty text-wrap'>
        post: {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default PostId;
