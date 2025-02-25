import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/providers/theme-provider.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LocalizeProvider from '@/providers/localize-provider.tsx';

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocalizeProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          defaultTheme='dark'
          storageKey='ui-theme'
        >
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </LocalizeProvider>
  </StrictMode>,
);
