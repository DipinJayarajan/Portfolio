import React from 'react'

const PortfolioItem = ( {title, imgUrl, stack, link } ) => {
  return (
    <div className='border-gray-600 border-2 rounded-lg overflow-hidden'>
        <img 
        src={imgUrl} 
        alt='portfolio'
        className='w-full h-36 md:h-48 object-cover cursor-pointer bg-col' />
        <div className='w-ful p-4 text-gray-200'> 
        <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold flex items-center justify-center'>{title}</h3>
        <p className='text-xs text-gray-300 font-mono flex flex-wrap gap-2 flex-row items-center justify-start  md:text-sm'>
            {stack.map(item => (
                <span className='mr-2 inline-block px-2 py-1 font-semibold border-2 border-gray-600 rounded-md' >{item}</span>
            ))}
        </p>
        </div>
    </div>
  )
}

export default PortfolioItem