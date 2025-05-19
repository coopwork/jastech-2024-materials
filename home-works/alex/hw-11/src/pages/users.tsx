

import UsersList from '@/components/lists/users-list.tsx';

import {useSearchParams } from 'react-router-dom';
import useGetUsers from '@/utils/api/json-placeholder/hooks/use-get-users';
import { ChangeEvent, useEffect, useState } from 'react';
import { UserType } from '@/utils/types/user.type.ts';
import { Input } from '@/components/ui/input.tsx';


const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  

  const { data, isPending } = useGetUsers();
  const [filteredUsers, setFilteredUsers] = useState<UserType[]>(data || []);
  const submitSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const search: string = e.target.value;
    if (data?.length) {
      setFilteredUsers(
        data?.filter(
          (User) =>
            User.firstname.toLowerCase().includes(search.toLowerCase()) ||
            User.lastname.toLowerCase().includes(search.toLowerCase()),
        ),
      );
    }
    setSearchParams({ search });
  };

  useEffect(() => {
    if (data?.length) {
      setFilteredUsers(data);
    }
    if (searchParams.get('search')) {
      submitSearch({
        target: { value: searchParams.get('search') || '' },
      } as ChangeEvent<HTMLInputElement>);
    }
  }, [data]);


  return (
    <div className='container mx-auto mb-10'>
      <div className='my-5'>
        <Input
          onChange={submitSearch}
          defaultValue={searchParams.get('search') || ''}
          placeholder='Найти пользователя...'
        />
      </div>

      <UsersList
        isLoading={isPending} 
        users = {filteredUsers} 
      />






    </div>
  );
};

export default Users;
