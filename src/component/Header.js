import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Button} from '@mui/material';

const Header = () => {
  return (
    <div>
      <div className=' flex justify-between items-center p-4 border-b-2 border-orange-500'> 
      <span className='text-3xl' > <span className='text-red-500 font-bold'>Movie</span> Check </span>
      <Button>
      <h1 className='flex items-center cursor-pointer' >  
       <span className='text-white' >Add New<AddCircleIcon className='ml-1' color = 'inherit' /> </span> 
      </h1>
      </Button>
      </div>
    </div>
  )
}

export default Header
