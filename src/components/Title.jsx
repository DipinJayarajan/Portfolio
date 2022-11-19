import React from 'react'

const Title = ( {children , id } ) => {
  return (
    <h1 id={id && id}
    className="text-2xl font-bold font-serif text-white mb-4 underline underline-offset-8 decoration-4 ">
        {children}
    </h1>
  )
}

export default Title