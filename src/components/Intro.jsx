import React from 'react'

const Intro = () => {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-12 bg-slate-900'>
      <div>

        <h1 className='md:text-xl text:base font-mono mb-1 md:mb-3 font-bold text-slate-500 tracking-widest'>Hi, My Name is</h1>
        
        <h2 className='text-4xl md:text-7xl text-transparent font-bold  bg-clip-text  bg-gradient-to-r from-blue-700 via-cyan-500 to-green-400 mb-2 md:mb-3 '>Dipin Jayarajan</h2>
        
        <h2 className="font-bold text-transparent md:text-5xl text-2xl bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-500 to-green-400 tracking-tight">I'm a Front-End Web Developer</h2>
        <br />
        <p className='mt-1 ml-8 text-gray-300 text-lg max-w-2xl mb-6 font-sans  tracking-normal'>
        I'm an Indie Front-End developer who enjoys taking little steps to create his own vision of the digital world. All of the projects are constructed from the ground up, from planning and designing to addressing real-life problems using code.
        </p>
      </div>
    </div>
  )
}

export default Intro