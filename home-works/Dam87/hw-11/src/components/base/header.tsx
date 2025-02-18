import { Link } from 'react-router-dom';
import Navigation from '@/components/base/navigation.tsx';
import { ThemeSwitcher } from '@/components/base/theme-switcher.tsx';

const Header = () => {
  return (
    <header className='px-2 py-5'>
      <div className='container mx-auto flex justify-between items-center gap-4'>
        <Link to={'/'}>LOGO</Link>

        <div className='flex items-center gap-4'>
          <Navigation />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
