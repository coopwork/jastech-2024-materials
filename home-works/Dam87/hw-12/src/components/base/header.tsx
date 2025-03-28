import { Link } from 'react-router-dom';
import Navigation from '@/components/base/navigation.tsx';
import { ThemeSwitcher } from '@/components/base/theme-switcher.tsx';
import LanguageSelector from '@/components/base/language-selector.tsx';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className='px-2 py-5'>
      <div className='container mx-auto flex justify-between items-center gap-4'>
        <Link to={'/'}>{t('app_name')}</Link>

        <div className='flex items-center gap-4'>
          <Navigation />
          <LanguageSelector />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
