import { Navigate, Outlet } from 'react-router-dom'
import { storageService } from '../storage'
import MainLayout from '../components/mainlayout'
import Home from '../pages/home'
import Content from '../pages/content'
import Admin from '../pages/admin'
import Product from '../pages/product/list-product'
import AddProduct from '../pages/product/add-product'
import MainLayoutAdmin from '../components/mainLayoutAdmin'
import Auth from '../pages/auth'
import VerifySuccess from '../pages/verifySuccess'
import { JSX, lazy, Suspense } from 'react'
import ProductDetail from '../pages/product/productDetails'
import InforCart from '../pages/cart/infor-cart'

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
        ],
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
