import React from 'react'
import { AppBar , Stack, Toolbar, Typography , Box, Button, IconButton} from '@mui/material'
import { NavLink , Link } from 'react-router-dom'
import images from '../assets'
const Navbar = () => {
  return (
    <AppBar className=' '>
           <Toolbar sx={{
              height:'56px'
           }} variant="dense" className='bg-[#2b2b2a]  flex relative items-center justify-between pr-10 pl-10'>
              <Stack direction='row' className='flex justify-center gap-10 text-white'>
                 <Link>MANSORY ATELIER</Link>
                 <Link>CARS</Link>
                 <Link>CARS FOR SALE</Link>
              </Stack>
             <Stack direction='row' className='mr-[160px] text-white h-[56px]'>
               <Link to={'/'} >
                 <img src={images.mansory} width={210}/>
               </Link>
             </Stack>
              <Stack direction='row' className='flex justify-center gap-10 text-white'>
                 <Link>NEWS</Link>
                 <Link>SHOP</Link>
                 <Link>MENU</Link>
              </Stack>
           </Toolbar>
    </AppBar>
  )
}

export default Navbar