import { Edit, Store } from 'lucide-react'
import Wishlist from '../components/Wishlist'
import LoginForm from './LoginForm'
import Signup from './Signup'

import { NavLink } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow overflow-auto'>
        <div className='container mx-auto px-4 py-8'>
          <div className='relative flex flex-col items-center'>
            <div className='w-48 h-48 rounded-full overflow-hidden shadow-lg mb-6'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg/330px-Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg'
                alt='Profile'
                className='w-full h-full object-cover'
              />
              <NavLink
                to='/Seller'
                className='absolute top-0 right-0 bg-white rounded-full p-2 shadow-lg cursor-pointer flex items-center space-x-2'
              >
                <Store className='text-black w-5 h-5' />
                <p className='text-black font-semibold text-sm'>Be a Seller</p>
              </NavLink>
              <NavLink
                to='/Seller'
                className='absolute top-10 right-0 bg-white rounded-full p-2 shadow-lg cursor-pointer flex items-center space-x-2'
              >
                <Edit className='text-black w-5 h-5' />
                <p className='text-black font-semibold text-sm'>Profile</p>
              </NavLink>
            </div>
            <div className='text-center mb-6'>
              <h2 className='text-2xl font-bold'>John Doe</h2>
              <p className='text-gray-500'>johndoe@example.com</p>
              <p className='text-gray-400'>+1 (555) 123-4567</p>
            </div>

            <h2 className='text-xl md:text-2xl font-bold text-gray-900 font-poppins text-left'>
              My Wishlist
            </h2>

            <Wishlist />
          </div>
          <LoginForm />
          <Signup />
        </div>
      </div>
    </div>
  )
}

export default Profile
