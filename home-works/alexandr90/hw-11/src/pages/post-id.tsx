import { useNavigate, useParams } from 'react-router-dom';
import useGetPostById from '@/utils/api/json-placeholder/hooks/use-get-post-by-id.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { Button } from '@/components/ui/button.tsx';
import AnotherPostsList from '@/components/lists/another-posts-list.tsx';
import { Loader } from 'lucide-react';
import  useGetCommentById  from "@/utils/api/json-placeholder/hooks/use-get-comment-by-id";




const PostId = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { data, isPending } = useGetPostById(`${postId}`);
  const { data: comments } = useGetCommentById(`${postId}`);

  console.log(comments);
  
  
  return (
    <div className='container mx-auto flex gap-4'>
      {isPending ? (
        <div className='min-h-[30vh] w-full flex items-center justify-center flex-col'>
          <Loader className='w-24 h-24 animate-spin' />
          <h1 className='text-xl'>Loading...</h1>
        </div>
      ) : data ? (
        <div className='my-10'>
          <img
            className='w-full rounded-md'
            src={data?.image}
          />
          <h2 className='text-2xl font-semibold my-4'>{data?.title}</h2>
          <p className='my-4'>{data?.content}</p>
          <div className='w-full flex justify-between items-center'>
            <Badge>{data?.category}</Badge>
            <time>{new Date(data?.publishedAt).toLocaleString()}</time>
          </div>



          
        </div>
      ) : (
        <div className='w-full flex flex-col justify-center items-center h-[50vh] gap-5'>
          <h1 className='text-9xl'>404</h1>
          <p className='text-xl'>Такой пост не найден!</p>
          <Button
            size='lg'
            variant='link'
            onClick={() => navigate(-1)}
          >
            Назад
          </Button>
        </div>
      )}
      <div className='w-72 min-w-72 mt-3'>
        <h5 className='font-semibold text-lg text-center'>Похожие новости</h5>
        <AnotherPostsList
          hideId={postId}
          limit={4}
        />
      </div>
    </div>
  );
};

export default PostId;
