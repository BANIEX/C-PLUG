import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {FaBars} from 'react-icons/fa'


const Header = ({setCollapseNav}) => {
  
  return (
    <>
        <div className='bg-black p-4 flex items-center justify-between '>
          <div className='flex items-center justify-evenly px-4 gap-4'>
                {/* <div className={`bg-teal-700 ${!collapseNav ? "w-60" : "w-10"} duration-300 flex flex-col`}></div> */}
            <FaBars className='text-gray-400 cursor-pointer z-10 ' size={30}/>
            <BiSearch className='text-bold cursor-pointer text-gray-400 hidden' size={30}/>
            <h2 className='text-white font-bold text-2xl z-10'><span className='text-red-600'>C</span>-PLUG</h2>
            {/* <CgProfile className='text-gray-400 cursor-pointer z-10 md:hidden' size={30} /> */}
           
          </div>
            <div className="rounded overflow-hidden md:flex border-2 border-gray-400 mr-44 hidden">
              <input type="text" className="px-4 py-2 w-96 outline-none" placeholder="Search for enterpreneurs on campus" />
              <button className="flex items-center justify-center px-4 border-l bg-gray-200">
               <BiSearch className='text-bold cursor-pointer'/>
              </button>
          </div>
          <div className='hidden md:flex items-center gap-2'>
               <p className='text-white font-bold text-xl'>BUSINESS <span className='text-red-600'>ON </span>CAMPUS</p>
             <button className='bg-red-600 p-2 rounded-sm text-white text-sm font-bold hover:bg-red-400'>Add business information</button>
          </div> 
   
        </div>
      

        {/* Mobile Nav */}
        {/* <div>
          <FaBars className='text-gray-400 cursor-pointer z-10' size={30}/>
          <h2 className='text-white font-bold text-2xl z-10'><span className='text-red-600'>C</span>-PLUG</h2>
        
        </div> */}

         <div className='bg-black text-white sex m-3 hidden'>
          <span className='bg-red-600 p-1 rounded-sm text-sm mx-2'>Yam option</span>
          <span className='bg-red-600 p-1 rounded-sm text-sm mx-2'>Yam option</span>
          <span className='bg-red-600 p-1 rounded-sm text-sm mx-2'>Yam option</span>
          <span className='bg-red-600 p-1 rounded-sm text-sm mx-2'>Yam option</span>
          <span>Yam option</span>
        </div>
    </>
  )
}

export default Header