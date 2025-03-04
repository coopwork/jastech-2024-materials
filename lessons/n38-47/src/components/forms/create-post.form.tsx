import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'ui/form.tsx';
import { Input } from 'ui/input.tsx';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from 'ui/button.tsx';
import { Textarea } from 'ui/textarea.tsx';
import { useMutation } from '@tanstack/react-query';
import postPost from '@/utils/api/json-placeholder/requests/post/post-post.ts';
import { queryClient } from '@/utils/api/query-client.ts';
import { PostType } from '@/utils/types/post.type.ts';
import { toast } from 'sonner';

const formSchema = z.object({
  title: z.string().min(2),
  content: z.string().min(2),
  category: z.string().min(2),
});

type PropsType = {
  closeModalAction?: () => void;
};

const CreatePostForm = ({ closeModalAction }: PropsType) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      content: '',
      category: '',
    },
  });

  const createPostMutation = useMutation({
    mutationFn: postPost,
    onSuccess: (res) => {
      // invalidate cache
      // queryClient.invalidateQueries({ queryKey: ['posts'] });
      const currentPosts = queryClient.getQueryData(['posts']) as PostType[];
      const newPosts = [res, ...currentPosts];
      queryClient.setQueryData(['posts'], newPosts);
      if (closeModalAction) closeModalAction();
      toast.success(`Пост "${res.title}" успешно создан!`);
      console.log(res);
    },
    onError: (err) => {
      console.error(err);
      toast.error(`Ошибка! Неудалось создать пост!`);
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      createPostMutation.mutate(values);
    } catch (error) {
      console.error('Form submission error', error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8 max-w-3xl mx-auto py-10'
      >
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Заголовок</FormLabel>
              <FormControl>
                <Input
                  placeholder='Введите заголовок поста'
                  type='text'
                  {...field}
                />
              </FormControl>
              <FormDescription>Заголовок поста</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='content'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пост</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Введите текст для поста'
                  className='resize-none'
                  {...field}
                />
              </FormControl>
              <FormDescription>Текст поста</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='category'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Категория</FormLabel>
              <FormControl>
                <Input
                  placeholder='Введите категорию поста'
                  type='text'
                  {...field}
                />
              </FormControl>
              <FormDescription>Категория поста</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          size='lg'
          className='w-full'
          type='submit'
        >
          Создать
        </Button>
      </form>
    </Form>
  );
};

export default CreatePostForm;
