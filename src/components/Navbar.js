import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <div className='name'> Portfolio </div>
            <div className='content'>
                <NavLink to="/">Skills</NavLink>
                <NavLink to="/">Open Source</NavLink>
                <NavLink to="/">Projects</NavLink>
                <NavLink to="/">Achievement</NavLink>
                <NavLink to="/">Blogs</NavLink>
                <NavLink to="/">Talks</NavLink>
                <NavLink to="/">Contact Me</NavLink>

            </div>


        </div>



    </div>
  )
}

export default Navbar