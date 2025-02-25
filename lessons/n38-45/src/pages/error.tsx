import { useEffect } from 'react';

const Error = () => {
  useEffect(() => {
    document.title = 'Ошибка';
  }, []);
  return <div>404 Страница не найдена</div>;
};

export default Error;
