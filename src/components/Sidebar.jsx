import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const [openUp, setOpenUp] = useState(false);
    const [pop, setPop] = useState(false);
    

  return (
    <>
        <div className={`fixed top-0 bottom-0 p-2 w-[300px] overflow-y-auto text-center bg-black ${pop? 'block':'hidden'}`}>
            <div className='absolute right-8 top-6 cursor-pointer' onClick={() => setPop(!pop)}>
                {pop ? <FaBars className='text-gray-400 cursor-pointer z-10' size={30} /> : <AiOutlineClose className='text-gray-400 cursor-pointer z-10 ' size={30} />}
            </div>
            <div className='text-gray-100 text-xl mt-20'>
                <div className='p-2.5 mt-20 flex md:hidden items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-200 text-gray-400'>
                    <BiSearch />
                    <input type="text" placeholder='Search' className='text-[15px] ml-4 w-full bg-transparent outline-none' />
                </div>
                 <div className='p-2.5 mt-3 flex items-center px-4 duration-300 cursor-pointer text-gray-400'>
                    <p>Enterpre</p>
                    
                </div>
                <hr className='text-gray-400'/>
                <div className='p-2.5 mt-3 flex items-center px-4 duration-300 cursor-pointer text-gray-400'>
                    <div className='flex justify-between w-full items-center' onClick={() => (setOpen(!open))}>
                        <p className=' text-gray-400'>Enterpre</p>
                        <span className='text-sm rotate-180'>v</span>
                    </div> 
                </div>
                <hr className='text-gray-400'/>
            </div>
               <div className={`text-left text-sm font-thin mt-2 w-4/5 mx-auto text-gray-200 ${open? 'block' : 'hidden'}`}>
                 <h1 className='cursor-pointer p-2 hover:bg-red-700 rounded-md mt-1'>Fashion</h1>
                 <h1 className='cursor-pointer p-2 hover:bg-red-700 rounded-md mt-1'>Parties</h1>
                 <h1 className='cursor-pointer p-2 hover:bg-red-700 rounded-md mt-1'>Sports</h1>
                 <h1 className='cursor-pointer p-2 hover:bg-red-700 rounded-md mt-1'>Events</h1>
              </div>
             <div className='p-2.5 mt-3 flex items-center px-4 duration-300 cursor-pointer text-gray-400'>
                    <div className='flex justify-between w-full items-center' onClick={() => (setOpenUp(!openUp))}>
                        <p className=' text-gray-400'>Enterpre</p>
                        <span className='text-sm rotate-180'>v</span>
                    </div> 
                </div>
                <hr className='text-gray-400'/>
                 <div className={`text-left text-sm font-thin mt-2 w-4/5 mx-auto text-gray-200 ${openUp? 'block' : 'hidden'}`}>
                 <h1 className='cursor-pointer p-2 hover:bg-red-700 rounded-md mt-1'>Fashion</h1>
                 <h1 className='cursor-pointer p-2 hover:bg-red-700 rounded-md mt-1'>Parties</h1>
                 <h1 className='cursor-pointer p-2 hover:bg-red-700 rounded-md mt-1'>Sports</h1>
                 <h1 className='cursor-pointer p-2 hover:bg-red-700 rounded-md mt-1'>Events</h1>
              </div>
        </div>
        
    </>
  )
}

export default Sidebar