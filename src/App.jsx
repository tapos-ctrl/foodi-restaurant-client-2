import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './sheard/Footer/Footer'
import NavBar from './sheard/NavBar/NavBar'

function App() {


  return (
   <div className=''>
     <div className='container mx-auto px-5 '>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
    <Footer></Footer>
   </div>
  )
}

export default App
