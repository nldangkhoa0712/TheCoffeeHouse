import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Suspense } from 'react'
import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const MainLayout = () => {
  return (
    <div className="relative flex h-screen flex-col justify-between">
      <header>
        <Header />
      </header>
      {/* <header className="fixed z-50 flex w-full justify-between bg-[#F9F6F2]">
      </header> */}
      <main className="px-[100px] py-[110px]">
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
      <footer className="bottom-0 flex h-[32vh] w-full justify-center bg-[#543310]">
        <Footer />
      </footer>
    </div>
  )
}

export default MainLayout
