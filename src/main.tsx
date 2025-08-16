import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { EventsPage } from './pages/events/EventsPage.tsx'
import {Layout} from './components/Layout.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { EventsSearchResultsPage } from './pages/events/EventsSearchResultsPage.tsx'

const queryClient = new QueryClient();
const router = createBrowserRouter([{
  element: <Layout/>,
  children: [
      {
        path: '/',
        element: <EventsPage/>
      },
      {
        path: '/events',
        element: <EventsPage/>
      },
      {
        path: '/events-search-results',
        element: <EventsSearchResultsPage/>
      }
    ]
}])
    
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
  <RouterProvider router={router}/>
  </QueryClientProvider>,
)
