import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx';
import { cn } from '@/lib/utils.ts';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '@/utils/constants/languages.ts';

type Props = {
  className?: string;
};

const LanguageSelector = ({ className }: Props) => {
  const { i18n } = useTranslation();

  return (
    <Select
      value={i18n.language}
      onValueChange={i18n.changeLanguage}
    >
      <SelectTrigger className={cn('', className)}>
        <SelectValue placeholder='Выберите язык' />
      </SelectTrigger>
      <SelectContent>
        {LANGUAGES.map(({ label, code }) => (
          <SelectItem
            key={code}
            value={code}
          >
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
