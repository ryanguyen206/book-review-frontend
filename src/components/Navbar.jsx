import React, {useContext} from 'react'
import { RiBook2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {

    
    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div className='py-10 text-xl'>
            <ul className='flex justify-between text-stone-700 font-medium'>
                <div className='flex items-center'> 
                    <RiBook2Fill/>
                    <li className='ml-2'><Link to='/'>Book Review</Link></li>
                </div>
                <div className='flex'>
                    {user && <li className='pr-6 hover:text-stone-400'><Link to ='/create'>Create</Link></li>}
                    {user ? <li className='hover:cursor-pointer hover:text-stone-400'onClick={logoutUser}>Logout</li> :<li className='hover:cursor-pointer hover:text-stone-400'><Link to='/login'>Login</Link></li>}
                </div>
            
            </ul>
        </div>
    )
}

export default Navbar