import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Suspense } from 'react'

const MainLayout = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 flex w-full justify-center border-b bg-[#ffffffca]">
        <Header />
      </header>
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
      <footer className="bottom-0 flex h-[32vh] w-full justify-center bg-[#543310]">
        <Footer />
      </footer>
    </div>
  )
}

export default MainLayout
