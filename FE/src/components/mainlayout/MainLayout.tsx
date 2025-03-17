import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Suspense } from 'react'
import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const MainLayout = () => {
  return (
    <div className="">
      <header className="sticky top-0 z-50 border-b-2 border-gray-200 bg-[#ffffffcc]">
        <div className="container mx-auto">
          <Header />
        </div>
      </header>
      <main>
        <Suspense fallback={<div>...Loading</div>}>
          <Outlet />
          <button
            style={{
              background: '#DA5036',
              padding: '35px',
              borderRadius: '50%',
              color: '#f9f6f2',
              position: 'fixed',
              right: '30px',
              bottom: '100px',
            }}
          >
            <ShoppingCartIcon />
          </button>
        </Suspense>
      </main>
      <footer className="bg-[#fffcf4]">
        <div className="container mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
