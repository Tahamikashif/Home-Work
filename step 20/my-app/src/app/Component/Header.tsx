"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoIosArrowDown, IoIosArrowDropdown } from 'react-icons/io'
import { CompulsoryData } from '../data/main/Compulsory'
import { Tracks } from '../data/main/Tracks'

const Navlinks = [
{id:"1",link:"/",title:"home"},
{id:"2",link:"/About",title:"apply"},
{id:"4",link:"/Jobs",title:"jobs"},
{id:"3",link:"/Result",title:"result"},
]



const Header = () => {
    const [open,setOpen] = useState(false)
    const [showMenu,setShowMenu] = useState(false)
  return (
    <div className='sticky top-0 w-full z-30 bg-main backdrop:blur-3xl print:hidden'>
     <div className='m-auto  flex h-16 w-[95%]  ml-[-60px] lg:ml-[-20px]  justify-center items-center md:h-20 lg:w-[90%] xl:w-[95%]'>
      <Link href={"/"}>
        <Image  src={"/Images/logo.png"} alt='pics' width={95} height={20}
        className='mt-20  w-[70px] lg:mt-20 lg:ml-[80px] sm:w-[80px] md:ml-[-120px] text-[20rem] md:w-[90px] md:text-[17px] '
        />
      </Link>
      <h1 className=' ml-[100px] w-[50%] font-extrabold text_shadow text-[20px] text-white lg:ml-[300px] md:ml-[-200px]'>
          Tuition Free Program

          </h1>

        



        
          <div className=' hidden lg:gap-8 justify-center items-center text-white font-bold mx-auto ml-[300px] lg:flex  gap-10  '>
          {Navlinks.map((items) => (
            <Link href={items.link} key={items.id}>
             <div className=' capitalize'>{items.title} </div>
            
            </Link>



          ))}

          <div className='relative cursor-pointer' onClick={() => setShowMenu(!showMenu)}>
           <div className='capitalize flex justify-center items-center'>
             courses <IoIosArrowDown className=" ml-[8px] my-[8px]" size={15} />
             {showMenu && (
             <div id='my' className=' absolute right-0 bg-white mt-[120px]   w-[400px]    text-black rounded-lg'>
               <div className='box_shadow p-7 bg-zinc-50 h-[300px] sm:h-auto  overflow-y-auto'>
                  <h1 className='font-bold text-3lg pb-3 text-[20px] text-left'>
                   Core Courses
                   </h1>

                    {CompulsoryData.map((value) => (
                   <Link href={`/Compulsory/3`} key={value.id} >
                     <div className='py-1 px-2 font-medium text-[18px] hover:text-main'>
                      {value.text}


                     </div>
                     </Link>


                    ))}

                    <h1 className='py-10 font-bold text-3lg pb-3 text-[20px] text-left border-t-2 border-gray-200 mt-[20px]'>

                    Advanced Courses



                    </h1>
                    {Tracks.map((val) => (

<div className='py-1 px-2 font-medium text-[18px] hover:text-main' >
<Link href={`/Tracks/ ${val.iD}/4`} key={val.iD}>
{val.name}

</Link>

</div>



))}


                   
                   
            


                  




               </div>




             </div>






             )}



           </div>


          </div>




          </div>
     
     </div>

    
    </div>
  )
}

export default Header
