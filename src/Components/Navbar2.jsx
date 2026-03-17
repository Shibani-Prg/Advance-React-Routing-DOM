import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
      let navigate = useNavigate();
  return (

    // To Navigate
    <div className='px-5 py-2 bg-cyan-800'>
         <button onClick={() => {
        navigate('/')
      }
      } className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Return to home page</button>

      {/* //To maintain history */}
      <button onClick={() => {
        navigate(-1)
      }
      } className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Back(Prev)</button>
     
      {/* //To maintain history */}
      <button onClick={() => {
        navigate(+1)
      }
      } className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Next</button>
    </div>
  )
}

export default Navbar2