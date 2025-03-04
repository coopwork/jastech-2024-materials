import UsersList from '@/components/lists/users-list.tsx';

import { useSearchParams } from 'react-router-dom';
import useGetUsers from '@/utils/api/json-placeholder/hooks/use-get-users';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { UserType } from '@/utils/types/user.type.ts';
import { Input } from '@/components/ui/input.tsx';
import useDebounce from '@/hooks/use-debounce.tsx';

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isPending } = useGetUsers();
  const [filteredUsers, setFilteredUsers] = useState<UserType[]>([]);
  const [visibleUsers, setVisibleUsers] = useState<UserType[]>([]);
  const [leadingMore, setLeadingMore] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams.get('search') || '',
  );
  const usersPerPage = 6;

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (data?.length) {
      setFilteredUsers(data);
      setVisibleUsers(data.slice(0, usersPerPage));
      setHasMore(data.length > usersPerPage);
    }

    submitSearch({
      target: { value: searchParams.get('search') || '' },
    } as ChangeEvent<HTMLInputElement>);
  }, [data]);

  useEffect(() => {
    if (data?.length) {
      const filtered = data?.filter(
        (User) =>
          User.firstname
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase()) ||
          User.lastname
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase()),
      );
      setFilteredUsers(filtered);
      setVisibleUsers(filtered?.slice(0, usersPerPage));
      setHasMore(filtered.length > usersPerPage);
      setCurrentPage(1);
    }
  }, [debouncedSearchTerm, data]);

  const submitSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const search: string = e.target.value;
    setSearchTerm(search);
    setSearchParams({ search });
    if (search) {
      document.title = `Пользователи по запросу ${search}`;
    } else {
      document.title = `Пользователи`;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore && !leadingMore) {
          setLeadingMore(true);
          const nextUsers = filteredUsers.slice(
            currentPage * usersPerPage,
            (currentPage + 1) * usersPerPage,
          );
          setVisibleUsers((prevUsers) => [...prevUsers, ...nextUsers]);
          setCurrentPage((prevPage) => prevPage + 1);
          setHasMore(filteredUsers.length > (currentPage + 1) * usersPerPage);
          setLeadingMore(false);
        }
      },
      { threshold: 1.0 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [filteredUsers, hasMore, leadingMore, currentPage, usersPerPage]);

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
        isLoading={isPending || leadingMore}
        users={visibleUsers}
      />
      {hasMore && (
        <div
          ref={observerRef}
          className='h-10'
        />
      )}
    </div>
  );
};

export default Users;
