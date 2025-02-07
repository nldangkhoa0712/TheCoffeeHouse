import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Suspense } from 'react'
import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const MainLayout = () => {
  return (
    <div className="relative">
      <header className="sticky top-0 z-50 flex w-full justify-center border-b bg-[#ffffffca]">
        <Header />
      </header>
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
        <button className="fixed right-0 bottom-50 flex size-[100px] cursor-pointer items-center justify-center rounded-[50%]! bg-red-500!">
          <ShoppingCartIcon />
        </button>
      </Suspense>
      <footer className="bottom-0 flex h-[32vh] w-full justify-center bg-[#543310]">
        <Footer />
      </footer>
    </div>
  )
}

export default MainLayout
