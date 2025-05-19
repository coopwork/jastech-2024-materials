import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/providers/theme-provider.tsx';
import { useTranslation } from 'react-i18next';
export function ThemeSwitcher() {
  const { setTheme } = useTheme();
  const { t } = useTranslation();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className='min-w-9'
          variant='outline'
          size='icon'
        >
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')}>
        {t(`theme_switcher.light`)}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
        {t(`theme_switcher.dark`)}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
        {t(`theme_switcher.system`)}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
