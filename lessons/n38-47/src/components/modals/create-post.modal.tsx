import { Button } from 'ui/button.tsx';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'ui/dialog.tsx';
import CreatePostForm from '@/components/forms/create-post.form.tsx';
import { useRef } from 'react';

const CreatePostModal = () => {
  const closeModalRef = useRef<HTMLButtonElement>(null);

  const handleCloseModal = () => {
    if (closeModalRef.current) {
      closeModalRef.current.click();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Создать пост</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Создать пост</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div>
          <CreatePostForm closeModalAction={handleCloseModal} />
          <DialogClose ref={closeModalRef} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostModal;
