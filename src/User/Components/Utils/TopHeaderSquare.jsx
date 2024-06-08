import React from 'react'

export default function TopHeaderSquare() {
  return (
    <div className='flex bg-gray-100 w-[200px] h-[50px] rounded-2xl'>
        <div className="flex flex-col items-start  w-[65%] mx-[10px]">
            <h4 className='font-semibold text-md'>Active Tenders</h4>
            <p className='text-appGrey text-[0.8rem]' >Total Tenders Active</p>
        </div>
        <div className="flex justify-center items-center w-[35%]">
            <p className='text-center font-semibold text-lg'>13</p>
        </div>
    </div>
  )
}