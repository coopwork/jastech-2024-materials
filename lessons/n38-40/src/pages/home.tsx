import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import PostsList from '@/components/lists/posts-list.tsx';

const Home = () => {
  return (
    <div>
      <h1 className='text-foreground'>HOME PAGE</h1>
      <Input placeholder='My text' />
      <Button>Test</Button>
      <PostsList />
    </div>
  );
};

export default Home;
