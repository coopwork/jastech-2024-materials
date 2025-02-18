import PostsList from '@/components/lists/posts-list.tsx';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination.tsx';
import { Link, useSearchParams } from 'react-router-dom';
import useGetPosts from '@/utils/api/json-placeholder/hooks/use-get-posts.tsx';
import { ChangeEvent, useEffect, useState } from 'react';
import { PaginationType, PostType } from '@/utils/types/post.type.ts';
import { Input } from '@/components/ui/input.tsx';


const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagination, setPagination] = useState<PaginationType>({
    data: [],
    page: Number(searchParams.get('page') || 1) || 1,
    limit: 20,
    count: 100,
  });
  //console.log(pagination);
  const { data, isPending } = useGetPosts();
  const [filteredPosts, setFilteredPosts] = useState<PostType[]>(data || []);
  const submitSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const search: string = e.target.value;
    if (data?.length) {
      setFilteredPosts(
        data?.filter(
          (post) =>
            post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.content.toLowerCase().includes(search.toLowerCase()),
        ),
      );
    }
    setSearchParams({ page: '1', search });
  };

  useEffect(() => {
    if (data?.length) {
      setFilteredPosts(data);
    }
    if (searchParams.get('search')) {
      submitSearch({
        target: { value: searchParams.get('search') || '' },
      } as ChangeEvent<HTMLInputElement>);
    }
  }, [data]);

  useEffect(() => {
    let allPosts: PostType[][] = [];
    let pagePosts = [];
    if (filteredPosts.length) {
      for (let i = 0; i < filteredPosts.length; i++) {
        pagePosts.push(filteredPosts[i]);
        if (pagePosts.length >= pagination.limit) {
          allPosts.push(pagePosts);
          pagePosts = [];
        }
      }
      if (pagePosts.length) {
        allPosts.push(pagePosts);
      }
    }
    setPagination((prevState) => ({
      ...prevState,
      data: allPosts || [],
      count: allPosts.length * pagination.limit,
    }));

    return () => {
      allPosts = [];
      pagePosts = [];
    };
  }, [filteredPosts]);

  useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      page: Number(searchParams.get('page') || 1) || 1,
    }));
  }, [searchParams]);

  return (
    <div className='container mx-auto'>
      <div className='my-5'>
        <Input
          onChange={submitSearch}
          defaultValue={searchParams.get('search') || ''}
          placeholder='Найти пост...'
        />
      </div>

      <PostsList
        isLoading={isPending}
        posts={pagination.data[pagination.page - 1]}
      />

      {pagination.count > pagination.limit && (
        <Pagination className='my-7'>
          <PaginationContent>
            {[...Array(pagination.count / pagination.limit)].map((_, index) => (
              <PaginationItem
                className={`relative rounded-lg ${index + 1 === pagination.page ? 'bg-primary text-primary-foreground' : 'bg-transparent'}`}
                key={index}
              >
                <Link
                  className='absolute top-0 left-0 bottom-0 right-0'
                  to={`?page=${index + 1}`}
                />
                <PaginationLink>{index + 1}</PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      )}





    </div>
  );
};

export default Home;
