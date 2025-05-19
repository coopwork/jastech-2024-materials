import './App.css';
import AppRouter from '@/lib/app-router.tsx';
import Header from '@/components/base/header.tsx';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default App;
