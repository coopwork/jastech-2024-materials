import { Card, CardContent } from '@/components/ui/card.tsx';
import { Skeleton } from '@/components/ui/skeleton.tsx';

const PostCardSkeleton = () => {
  return (
    <Card className='relative px-2 overflow-hidden grid grid-cols-12  gap-1 justify-between '>
      <CardContent className=' p-2.5 gap-1 col-span-12 md:col-span-8'>

        <Skeleton className='w-full h-7 my-3' />
        <Skeleton className='w-full h-3 my-3' />
        <Skeleton className='w-full h-7 my-3' />
        <Skeleton className='w-full h-5 my-3' />
        <Skeleton className='w-full h-5 my-3' />
        <Skeleton className='w-full h-5 my-3' />
      </CardContent>
      <Skeleton className='flex flex-col justify-start items-start mb-20 mt-5 mr-5 col-span-12 md:col-span-4' />
    </Card>
  );
};

export default PostCardSkeleton;
