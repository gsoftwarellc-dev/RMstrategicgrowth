import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      <Navbar />
      <main className="flex-grow" style={{ overflowX: 'clip' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
