import { Card, CardContent } from '@/components/ui/card.tsx';
import { Skeleton } from '@/components/ui/skeleton.tsx';

const PostCardSkeleton = () => {
  return (
    <Card className='relative p-0 overflow-hidden'>
      <Skeleton className='w-full aspect-video object-cover' />
      <CardContent className='p-2.5 flex flex-col gap-1'>
        <Skeleton className='w-full h-4 my-2' />
        <Skeleton className='w-full h-2' />
        <Skeleton className='w-full h-2' />
        <Skeleton className='w-full h-2' />
      </CardContent>
    </Card>
  );
};

export default PostCardSkeleton;
