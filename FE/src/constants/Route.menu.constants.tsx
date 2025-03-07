import { JSX, lazy } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import MainLayout from '../components/mainlayout'
import MainLayoutAdmin from '../components/mainLayoutAdmin'
import MainLayoutInfo from '../layouts/MainLayoutInfo'
import Admin from '../pages/admin'
import Auth from '../pages/auth'
import InforCart from '../pages/cart/infor-cart'
import Content from '../pages/content'
import SideBarInfo from '../pages/info/InfoPersonal'
import AddProduct from '../pages/product/add-product'
import Product from '../pages/product/list-product'
import ProductDetail from '../pages/product/productDetails'
import VerifySuccess from '../pages/verifySuccess'
import { storageService } from '../storage'
import Information from '../components/Information/Information'
import ChatBox from '../pages/message'

const HomePage = lazy(() => import('../pages/home'))

const ProtectedRoutes = () => {
  const accessToken = storageService.getAccessToken()
  return accessToken ? <Outlet /> : <Navigate to={'/auth'} />
}

const RejectedRoutes = () => {
  const accessToken = storageService.getAccessToken()
  return !accessToken ? <Outlet /> : <Navigate to={'/home'} />
}

interface RouteType {
  path: string
  isOpenMenu?: string
  element?: JSX.Element
  children?: RouteType[]
}

export const route: RouteType[] = [
  {
    path: '',
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            path: 'home',
            element: <HomePage />,
          },
          { path: 'content', element: <Content /> },
          { path: 'detail', element: <ProductDetail /> },
          { path: 'cart', element: <InforCart /> },
          {
            path: 'info',
            element: <MainLayoutInfo />,
            children: [{ path: 'personal', element: <Information /> }],
          },
        ],
      },
      {
        path: 'chat-box',
        element: <ChatBox />,
      },
    ],
  },

  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        path: '',
        element: <MainLayoutAdmin />,
        children: [
          {
            path: 'product',
            isOpenMenu: 'product',
            children: [
              {
                path: 'list-product',
                element: <Product />,
              },
              {
                path: 'add-product',
                element: <AddProduct />,
              },
            ],
          },
        ],
      },
    ],
  },

  // { path: "/auth", element: <Auth /> },
  {
    path: '',
    element: <RejectedRoutes />,
    children: [{ path: '/auth', element: <Auth /> }],
  },
  {
    path: '/verify',
    element: <VerifySuccess />,
  },
]
