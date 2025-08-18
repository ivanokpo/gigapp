import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { EventsPage } from './pages/events/EventsPage.tsx';
import { Layout } from './components/Layout.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EventsSearchResultsPage } from './pages/events/EventsSearchResultsPage.tsx';
import { Homepage } from './components/Homepage.tsx';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme.ts';
import ErrorPage from './components/Errorpage.tsx';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/events',
        element: <EventsPage />,
      },
      {
        path: '/events-search-results',
        element: <EventsSearchResultsPage />,
      },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </ThemeProvider>,
);
