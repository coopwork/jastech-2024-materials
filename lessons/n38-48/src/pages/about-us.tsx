import serverImage from '@/assets/server.webp';
import { useEffect, useMemo, useState } from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from 'ui/drawer.tsx';
import { Button } from 'ui/button.tsx';
import {
  AnvilIcon,
  HospitalIcon,
  HousePlusIcon,
  PickaxeIcon,
  StoreIcon,
  UniversityIcon,
  WarehouseIcon,
} from 'lucide-react';
import { getRandomNumber } from '@/utils/helpers/get-random-number.ts';

const AboutUs = () => {
  const [state, setState] = useState<number>(1);
  useEffect(() => {
    document.title = 'О нас';
  }, []);

  const iconPack = [
    <PickaxeIcon />,
    <AnvilIcon />,
    <WarehouseIcon />,
    <UniversityIcon />,
    <StoreIcon />,
    <HousePlusIcon />,
    <HospitalIcon />,
  ] as const;
  // const randomNumber = getRandomNumber(iconPack.length);
  const randomNumber = useMemo(() => getRandomNumber(iconPack.length), []);
  console.log(state);
  const handleSubmit = () => {
    setState((prevState) => prevState + 1);
  };

  return (
    <div>
      ABOUT US PAGE
      <div className='flex '>
        <img
          src={serverImage}
          alt=''
          className='w-20 aspect-video object-cover'
        />
        <img
          src='/assets/images/server.webp'
          alt=''
          className='w-20 aspect-video object-cover'
        />
      </div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Open {iconPack[randomNumber]}</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            {iconPack[randomNumber]}
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button onClick={handleSubmit}>Submit</Button>
            <DrawerClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default AboutUs;
