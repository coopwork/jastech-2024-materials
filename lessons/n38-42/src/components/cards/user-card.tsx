import { Card, CardContent, CardFooter } from '@/components/ui/card.tsx';
import { UserType } from '@/utils/types/user.type.ts';
import { Link } from 'react-router-dom';
import { getAge } from '@/utils/helpers/get-age.ts';

type PropsType = {
  user: UserType;
};

const UserCard = ({ user }: PropsType) => {
  return (
    <Card className='relative overflow-hidden flex flex-col justify-between'>
      <CardContent className='p-2.5 flex lg:flex-col-reverse justify-between items-start'>
        <div>
          <h6 className='w-full text-ellipsis overflow-hidden text-nowrap font-semibold text-lg'>
            {user.firstname} {user.lastname}
          </h6>

          <p className='w-full text-xs mt-2.5 line-clamp-3 text-muted-foreground'>
            {/*Birthdate: {new Date(user.birthDate).toLocaleDateString()}*/}
            Age: {getAge(user.birthDate)}
          </p>

          <p className='w-full text-xl mt-2.5 line-clamp-3'>
            {user.company.name}
          </p>
          <p className='w-full text-sm mt-2.5 line-clamp-3'>
            "{user.company.catchPhrase}"
          </p>
        </div>

        <img
          src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
          alt='avatar'
          className='w-1/4 lg:w-1/2 aspect-square object-cover'
        />
      </CardContent>
      <CardFooter className='p-2.5 flex flex-col gap-2.5'>
        <Link
          to={`mailto:${user.email}`}
          className='w-full text-xs text-ellipsis overflow-hidden text-secondary hover:underline'
        >
          {user.email}
        </Link>
        <Link
          to={`tel:${user.phone}`}
          className='w-full text-xs line-clamp-3 text-secondary hover:underline'
        >
          Tel: {user.phone}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
