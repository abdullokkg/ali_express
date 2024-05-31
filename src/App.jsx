import { Route, Routes, useLocation } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer/Footer'
import Like from './pages/Like/Like'
import Cart from './pages/Cart/Cart'
import Id from './pages/id/id'
import { Login } from '@mui/icons-material'
import Nav2 from './components/Navbar2'

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {
        !pathname.includes("/") && <Nav2/> 
      }
      {
        !pathname.includes("/") && <Header/>   
      }
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/like' element={<Like/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/id' element={<Id/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
