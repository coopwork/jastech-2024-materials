import { Card } from '@/components/ui/card.tsx';
import { CommentType } from '@/utils/types/comment.type.ts';
import useGetUserById from '@/utils/api/json-placeholder/hooks/use-get-user-by-id.tsx';

type Props = {
  comment: CommentType;
};

const CommentCard = ({ comment }: Props) => {
  const { data } = useGetUserById(comment.userId);
  return (
    <Card className='p-3 my-4'>
      <div className='flex items-center gap-3 mb-2.5'>
        <img
          className='w-12 aspect-square object-cover'
          src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
        />
        <h3 className='font-semibold text-lg'>
          {data?.firstname} {data?.lastname}
        </h3>
      </div>

      {comment.comment}
    </Card>
  );
};

export default CommentCard;
