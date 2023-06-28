import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Header = () => {
  return (
    <div>
      <div className=' flex justify-between items-center p-4 border-b-2 border-orange-500'> 
      <span className='text-3xl' > <span className='text-red-500 font-bold'>Movie</span> Check </span>
      <h1 className='flex items-center' >Add New<AddCircleIcon className='mr-3' color = 'inherit' /> </h1>
      </div>
    </div>
  )
}

export default Header
