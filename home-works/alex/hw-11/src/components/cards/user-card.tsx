import { Card, CardContent } from '@/components/ui/card.tsx';
import { UserType } from '@/utils/types/user.type.ts';

type PropsType = {
  user: UserType;
};

const UserCard = ({ user }: PropsType) => {
  return (
    <Card className='relative px-2 overflow-hidden grid grid-cols-12  gap-1 justify-between'>

      <CardContent className='p-2.5 col-span-12 md:col-span-8 '>
        <h6 className='w-full text-ellipsis overflow-hidden text-nowrap font-semibold text-lg'>
          {user.firstname} {user.lastname}
        </h6>

        <p className='w-full text-xs mt-2.5 line-clamp-3 text-muted-foreground' > Birthdate: {new Date(user.birthDate).toLocaleDateString()} </p>
       
        <p className='w-full text-xl mt-2.5 line-clamp-3' > {user.company.name}</p>
        <p className='w-full text-sm mt-2.5 line-clamp-3' > "{user.company.catchPhrase}"</p>
        <p className='w-full text-xs mt-2.5 line-clamp-3' >
        <a href={`mailto:${user.email}`} className='text-blue-500'>E-mail: {user.email} </a>
        </p>
        
        <p className='w-full text-xs mt-2.5 line-clamp-3' >
        <a href={`tel:${user.phone}`} className='text-blue-500'> Tel: {user.phone} </a>
        </p>
  
      </CardContent>
      <div className='flex flex-col justify-start items-start py-3 col-span-12 md:col-span-4'>
      <img src="./img/avatar.png" alt="avatar" className="w-24 h-a object-cover "/>
      </div>
    </Card>
  );
};

export default UserCard;
