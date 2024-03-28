import React from 'react'
import{Link,NavLink} from 'react-router-dom'
function Header() {
  return (
   <>
  <nav className="p-4 mb-0 pb-0">
  <div className="container mx-auto flex justify-between items-center flex-row mb-0 pb-0">
  <div className="flex-shrink-0 mb-0 pb-0">LOGO</div>
  <div className="space-x-4 mb-0 pb-0">
  <NavLink to={"/"}className={({isActive})=>`mr-2 ${isActive? "text-orange-700":"text-gray-700"}`}>Home</NavLink>
   
   <a href='#'>Packages</a>
   <a href='#'>Destinations</a>
   <a href='#'>Contact Us</a>
   
   </div>
   </div>
   </nav>
   </>
  )
}

export default Header
