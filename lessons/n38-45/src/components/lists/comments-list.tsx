import useGetComments from '@/utils/api/json-placeholder/hooks/use-get-comments.tsx';
import CommentCard from '@/components/cards/comment-card.tsx';

type Props = {
  postId: string;
};
const CommentsList = ({ postId }: Props) => {
  const { data } = useGetComments();

  return (
    <div>
      {data?.filter((c) => c.postId === +postId).length ? (
        data.map(
          (comment) =>
            +postId === comment.postId && (
              <CommentCard
                key={comment.id}
                comment={comment}
              />
            ),
        )
      ) : (
        <h3 className='text-xl text-foreground/25 text-center mt-24'>
          Список комментариев пуст
        </h3>
      )}
    </div>
  );
};

export default CommentsList;
