import React from 'react'

export default function TenderComp({tenderName, adDate, closeDate, status, submitName, submitDate}) {
  return (
    <section className='flex bg-appBlue h-[90px] w-[95%] my-2 rounded-xl '>
      <div className="flex items-center w-[70%] h-full">
        <div className="rounded-full h-3 w-3 bg-appOrange ml-2"></div>
        <div className="flex flex-col mx-2 h-full w-[50vw]">
          <div className="">
            <h4 className='text-appTextWhite font-semibold'>{tenderName}</h4>
            <div className="flex w-full h-[60px] justify-between">
              <div className='m-1'>
                <p className='font-semibold text-appTextWhite'>Advertised Date:</p>
                <p className='font-semibold text-center'>{adDate}</p>
              </div>
              <div className='m-1'>
                <p className='font-semibold text-appTextWhite'>Closing Date</p>
                <p className='font-semibold text-center'>{closeDate}</p>
              </div>
              <div className='m-1'>
                <p className='font-semibold text-appTextWhite text-center'>Status</p>
                <p className='font-semibold text-center'>{status}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center border-2 w-[30%]">
        <div className="flex flex-col justify-between h-full w-[200px]">
          <div className="border">
            <p className='text-sm'>Submitted By:</p>
            <p className='text-sm'>{submitName}</p>
          </div>
          <div className="border">
            <p className='text-sm'>Submitted At:</p>
            <p className='text-sm'>{submitDate}</p>
          </div>
        </div>
        <div className="flex justify-center items-center ml-[20px] rounded-2xl h-[80px] w-[80px] border-2 cursor-pointer">
          <p className='text-center'>View</p>
        </div>
      </div>
    </section>
  )
}
