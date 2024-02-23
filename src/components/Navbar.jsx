import React, {useContext, useState} from 'react'
import { RiBook2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { FiMenu } from "react-icons/fi";
import { BiExit } from "react-icons/bi";

const Navbar = () => {

    
    let {user, logoutUser} = useContext(AuthContext)
    const [showMenu, setMenu] = useState(false)
   
    return (
        <div className='py-10 text-xl'>
            <ul className='flex justify-between text-stone-700 font-medium'>
                <div className='flex items-center'> 
                    <RiBook2Fill/>
                    <li className='ml-2'><Link to='/'>Book Review</Link></li>
                </div>
                <div className='hidden lg:flex'>
                    {user && <li className='pr-6 hover:cursor-pointer hover:text-stone-400'><Link to='/profile'>Profile</Link></li>}
                    {user && <li className='pr-6 hover:text-stone-400'><Link to ='/create'>Create</Link></li>}
                    {user && <li className='hover:cursor-pointer hover:text-stone-400'onClick={logoutUser}>Logout</li>}
                </div>
                {user && (
                <div className={`lg:hidden`}>
                    {showMenu ? 
                    <div className={`absolute top-0 right-0 h-64 w-full bg-white shadow-lg`}>
                        <BiExit size={32} className='absolute z-10 top-5 right-5 cursor-pointer' onClick={() => setMenu(false)}/> 
                        <div className='mt-10'>
                        <ul className='p-4 text-center flex flex-col'>
                            <li className='py-2 '><Link className='hover:text-stone-400 cursor-pointer ' to='/' onClick={() => setMenu(false)}>Home</Link></li>
                            <li className='py-2 '><Link className='hover:text-stone-400 cursor-pointer' to='/profile' onClick={() => setMenu(false)}>Profile</Link></li>
                            <li className='py-2'><Link className='hover:text-stone-400 cursor-pointer '  to='/create' onClick={() => setMenu(false)}>Create</Link></li>
                            <li className='py-2 hover:text-stone-400 cursor-pointer w-20 mx-auto' onClick={logoutUser} >Logout</li>
                        </ul>
                        </div>
                    </div>
                    : <FiMenu size={32} onClick={() => setMenu(true)} className='hover:cursor-pointer'/>} 
                </div>
                )}
            </ul>
        </div>
    );

}

export default Navbar