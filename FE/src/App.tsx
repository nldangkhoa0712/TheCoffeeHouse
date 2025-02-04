import { Toaster } from 'react-hot-toast'
import { useRoutes } from 'react-router-dom'
import { route } from './constants/Route.menu.constants'
import './styles/index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function App() {
  const routeElement = useRoutes(route)
  return (
    <>
      {routeElement}
      <Toaster />
    </>
  )
}

export default App
