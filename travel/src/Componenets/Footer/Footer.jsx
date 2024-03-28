import React from 'react'
import{Link,NavLink} from 'react-router-dom'

function Footer() {
  return (
    <>
    
    <div className="flex flex-col min-h-screen">
    <footer className="mt-auto">
    <div>
    <h2>SAY HELLO</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eaque! Inventore, assumenda tempore. Ea, tenetur. Quasi officiis, delectus quisquam unde repellat modi laboriosam voluptatem asperiores deserunt, nulla excepturi.</p>
    </div>
    
    <div className='flex justify-center '>
        <img src="./travel\20673.png"/ >
        <img src="./travel\95627.png"  />
        <img src="./travel\5811465.png" />

   </div>
   <br></br>
   <div className="flex justify-between p-0 ">
    <div className='text-sm'>Copyright@2024 KAN Agency.All rights reserved</div>
    <div >
    <a href='#'>Home</a>
   <a href='#'>Packages</a>
   <a href='#'>Destinations</a>
   <a href='#'>Contact Us</a>
 </div>

   </div>
    </footer>
    </div>
      
    </>
  )
}

export default Footer
