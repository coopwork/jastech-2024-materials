import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/providers/theme-provider.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import LocalizeProvider from '@/providers/localize-provider.tsx';
import { queryClient } from '@/utils/api/query-client.ts';
import { Toaster } from 'ui/sonner.tsx';

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
            <Toaster position='top-center' />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </LocalizeProvider>
  </StrictMode>,
);
