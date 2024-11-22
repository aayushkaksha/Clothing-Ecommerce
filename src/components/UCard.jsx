import { Heart, Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ProductDes from '../dataFile/ProductDes.json'

const UCard = () => {
  const navigate = useNavigate()

  const handleCardClick = (id) => {
    navigate(`/product/${id}`)
  }

  return (
    <div className='main-container flex justify-left items-center'>
      <div className='w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 my-6 px-4'>
        {ProductDes.map((card) => (
          <div
            key={card.id}
            className='relative max-w-sm rounded-lg overflow-hidden shadow-md bg-white transition-transform duration-200 hover:shadow-lg hover:scale-105 cursor-pointer'
            onClick={() => handleCardClick(card.id)}
          >
            <div className='relative h-0 pb-[75%]'>
              <img
                className='absolute top-0 left-0 w-full h-full object-cover rounded-t-lg'
                src={card.images}
                alt={card.name}
              />
              <button className='absolute bottom-2 right-2 bg-white rounded-full p-1 shadow hover:shadow-md transition-colors'>
                <Heart className='w-5 h-5 text-gray-500 hover:text-red-500' />
              </button>
              <button className='absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:shadow-md'>
                <Plus className='w-5 h-5 text-gray-500' />
              </button>
            </div>
            <div className='mt-2 p-2 flex justify-between'>
              <div>
                <h3 className='text-sm text-gray-700'>{card.name}</h3>
              </div>
              <p className='text-sm font-medium text-gray-900'>
                Rs.{card.Price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UCard
