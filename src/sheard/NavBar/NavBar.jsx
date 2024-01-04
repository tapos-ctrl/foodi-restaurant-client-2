import { Link, NavLink } from "react-router-dom"
import './NavBar.css'
import useAuth from "../../hock/useAuth"
import { useState } from "react"


const NavBar = () => {  
  
  const {users, logOutUser, setUsers} = useAuth()

  const [toggle, setToggle] = useState(true) 


    const navLinks = <>
        <li><NavLink  className="hover:bg-transparent" to={'/'}>Home</NavLink></li>
        <li><NavLink  className="hover:bg-transparent" to={'/allFood'}>All Food</NavLink></li>
        <li><NavLink  className="hover:bg-transparent" to={'/blog'}>Blog</NavLink></li>
        <li><NavLink  className="hover:bg-transparent" to={'/signUP'}>Sign Up</NavLink></li>
    </>

  const handleLogOut = () =>{
    logOutUser()
    setUsers('')
  }

  // if(users?.photoURL == null){
  //   return <p>loading...</p>
  // }
  

  // const handleProfile = () =>{

  //   console.log('click me')
  // }



  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 text-[#000] shadow bg-base-100 rounded-box w-52'
          >
            {
                navLinks
            }
          </ul>
        </div>
        <Link to={'/'} className='btn btn-ghost text-xl hover:bg-transparent'><img src='https://i.ibb.co/WyHzN7r/F.png' className="bg-primary-bg p-2 rounded-lg " alt="" /> <img src='https://i.ibb.co/q7JH38g/oodi.png'  alt="" /></Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal text-[#000] px-1 gap-3 font-semibold  text-xl '>
          {
            navLinks
          }
        </ul>
      </div>
      <div className='navbar-end'>
 
        <div className="avatar flex  items-center relative">
        <div className="w-16 rounded-full hover:cursor-pointer" onClick={() =>setToggle(!toggle)}>
          

            <img src={users?.photoURL? users.photoURL: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
        </div>
        
        <ul className={`absolute  menu p-2 shadow bg-primary-bg z-50 rounded-box w-52 top-20 right-0 ${toggle && 'hidden'}`}>
          <Link to={'/conformOrder'} className="text-base text-center hover:bg-neutral-50 rounded-full py-2">My Order</Link>
          <Link to={'/allFood'} className="text-base text-center hover:bg-neutral-50 rounded-full py-2">Add a food</Link>
          <Link to={'/order'} className="text-base text-center hover:bg-neutral-50 rounded-full py-2">My added item</Link>
        </ul>
        {
          users?.email? <button onClick={() =>handleLogOut()} className='btn bg-transparent outline-none border-0 hover:bg-transparent text-primary-bg font-semibold text-xl'>Log Out</button>:
          <Link to={'/login'} className='btn bg-transparent outline-none border-0 hover:bg-transparent text-primary-bg font-semibold text-xl'>Login</Link>
        }
        </div>
      </div>
    </div>
  )
}

export default NavBar
