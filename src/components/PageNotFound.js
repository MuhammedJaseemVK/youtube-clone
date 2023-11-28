import React from 'react';
// import 404 from '../../public/404.png'

function PageNotFound() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-[#0f0f0f] text-white'>
      <img src="/404.png" alt="page not found" size={10} />
      <p>The page you are looking for is not found</p>
      <p className='text-[#FF0000] text-lg font-bold'>404: Page Not Found</p>
    </div>
  )
}

export default PageNotFound