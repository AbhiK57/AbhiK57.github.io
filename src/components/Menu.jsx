import React, {useState} from 'react'
import { AiOutlineDown } from "react-icons/ai";

const Menu = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu);
    }

  return (
    <div className='absolute w-full flex justify-center p-4 text-white'>
        <AiOutlineDown onClick={handleMenu} className={menu ? 'z-20 cursor-pointer top-[25%] ease-in duration-500' : 'z-20 cursor-pointer ease-in duration-500'} size={35}/>
        <div className= {menu ? 'fixed text-gray-300 left-0 top-0 w-full h-[8%] bg-black/55 z-10 ease-in duration-1000' 
        : 'fixed top-[-64%] w-full ease-in duration-1000 z-10'}>
            <ul className='flex justify-center fixed w-full h-[10%] py-2'>
                <li className='font-bold text-2xl px-3'>Home</li>
                <li className='font-bold text-2xl px-3'>Blog</li>
                <li className='font-bold text-2xl px-3'>Certifications</li>
                <li className='font-bold text-2xl px-3'>Photography</li>
                <li className='font-bold text-2xl px-3'>Fun</li>
            </ul>
        </div>
    </div>
  )
}

export default Menu