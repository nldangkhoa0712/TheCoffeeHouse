import { Toaster } from 'react-hot-toast'
import { useRoutes } from 'react-router-dom'
import { route } from './constants/Route.menu.constants'
import './styles/index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const routeElement = useRoutes(route)
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {routeElement}
        <Toaster />
      </QueryClientProvider>
    </>
  )
}

export default App
