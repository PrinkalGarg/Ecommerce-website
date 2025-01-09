import React from 'react'

function Policy() {
  return (
    <div className='flex  h-auto flex-row justify-evenly  mt-16 mb-16  border-2 p-14 items-center'>
        <div  className='flex flex-col items-center'>
            <img src='./assests/images/exchange.png' alt='hero' className='w-24  h-24'/>
            <h1 className='text-lg italic p-2 text-center'>Easy Exchange</h1>
        </div>
        <div  className='flex flex-col items-center'>
            <img src='./assests/images/return.png' alt='hero' className='w-24 h-24'/>
            <h1 className='text-lg italic p-2 text-center'>7 Day Easy Return</h1>
        </div>
       <div className='flex flex-col items-center'>
            <img src='./assests/images/contact.png' alt='hero' className='w-24 h-24'/>
            <h1 className='text-lg italic p-2 text-center'>Best Customer Support</h1>
        </div>
    </div>
  )
}

export default Policy