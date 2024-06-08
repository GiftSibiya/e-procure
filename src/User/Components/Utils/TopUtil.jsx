import React from 'react'
import TopHeaderSquare from './TopHeaderSquare'

export default function TopUtil() {
  return (
    <div className="bg-orange-200 flex flex-col justify-around  h-[100px] rounded-2xl py-[10px] my-[15px] text-center">
        <p className='text-start mx-[30px]'>Welcome Khanyi </p>
        <div className="flex justify-between mx-[30px]">
            <TopHeaderSquare/>
            <TopHeaderSquare/>
            <TopHeaderSquare/>
        </div>
    </div>
  )
}
