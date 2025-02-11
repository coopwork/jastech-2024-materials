import { useParams } from 'react-router-dom';
import useGetPostById from '@/utils/api/json-placeholder/hooks/use-get-post-by-id.tsx';

const PostId = () => {
  const { postId } = useParams();
  const { data } = useGetPostById(`${postId}`);
  return (
    <div className='container mx-auto flex gap-4'>
      <div className='my-10'>
        <img
          className='w-full rounded-md'
          src={data?.image}
        />
        <h2 className='text-2xl font-semibold my-4'>{data?.title}</h2>
        <p className='my-4'>{data?.content}</p>
        <div className='w-full flex justify-between items-center'>
          <span>{data?.category}</span>
          <time>{data?.publishedAt}</time>
        </div>
      </div>

      <div className='w-72 min-w-72'>
        <h5 className='font-semibold text-lg text-center'>Похожие новости</h5>
      </div>
    </div>
  );
};

export default PostId;
