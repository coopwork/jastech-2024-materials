import UserCard from '@/components/cards/user-card.tsx';
import UserCardSkeleton from '@/components/skeletons/user-card.skeleton.tsx';
import { UserType } from '@/utils/types/user.type.ts';
import { useTranslation } from 'react-i18next';

type PropsType = {
  users: UserType[];
  isLoading: boolean;
};

const UsersList = ({ users, isLoading }: PropsType) => {
  const { t } = useTranslation();
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
      {isLoading ? (
        [...Array(12)].map((_, i) => <UserCardSkeleton key={i} />)
      ) : users?.length ? (
        users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))
      ) : (
        <h2 className='lg:col-span-4 text-3xl h-48 font-semibold text-foreground/50 flex items-center justify-center'>
           {t('user list is empty')}
        
        </h2>
      )}
    </div>
  );
};

export default UsersList;
