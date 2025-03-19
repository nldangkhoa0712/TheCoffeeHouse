import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Suspense } from 'react'
import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ChatIcon from '@mui/icons-material/Chat'
import ChatBox from '../../pages/message'

const MainLayout = () => {
  const navigate = useNavigate()
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
            onClick={() => navigate('/cart')}
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
          {/* <button
            style={{
              background: '#DA5036',
              padding: '35px',
              borderRadius: '50%',
              color: '#f9f6f2',
              position: 'fixed',
              right: '30px',
              bottom: '200px',
            }}
          >
            <ChatIcon />
            <div className="bottom-30 right-35 absolute h-40 bg-red-500">
              abc
            </div>
          </button> */}
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
