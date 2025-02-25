import serverImage from '@/assets/server.webp';
import { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    document.title = 'О нас';
  }, []);

  return (
    <div>
      ABOUT US PAGE
      <img
        src={serverImage}
        alt=''
      />
      <img
        src='/assets/images/server.webp'
        alt=''
      />
    </div>
  );
};

export default AboutUs;
