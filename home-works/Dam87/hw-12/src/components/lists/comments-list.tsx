import useGetComments from '@/utils/api/json-placeholder/hooks/use-get-comments.tsx';
import CommentCard from '@/components/cards/comment-card.tsx';
import { useTranslation } from 'react-i18next';
type Props = {
  postId: string;
};
const CommentsList = ({ postId }: Props) => {
  const { data } = useGetComments();
  const { t } = useTranslation();
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
      {t(`pages.post.comments_is_empty`)}
        </h3>
      )}
    </div>
  );
};

export default CommentsList;
