import React from 'react'

export default function TenderComp() {
  return (
    <section className='flex bg-appBlue h-[90px] w-[95%] my-2 rounded-xl '>
      <div className="flex items-center w-[70%] h-full">
        <div className="rounded-full h-3 w-3 bg-appOrange ml-2"></div>
        <div className="flex flex-col mx-2 h-full w-[50vw]">
          <div className="">
            <h4 className='text-appTextWhite font-semibold'>Tender Name Will Be Placed Here</h4>
            <div className="flex w-full h-[60px] justify-between">
              <div className='m-1'>
                <p className='font-semibold text-appTextWhite'>Advertised Date:</p>
                <p className='font-semibold text-center'>2024-01-02</p>
              </div>
              <div className='m-1'>
                <p className='font-semibold text-appTextWhite'>Closing Date</p>
                <p className='font-semibold text-center'>2024-01-02</p>
              </div>
              <div className='m-1'>
                <p className='font-semibold text-appTextWhite text-center'>Status</p>
                <p className='font-semibold text-center'>2024-01-02</p>
              </div>
            
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[30%]"></div>
    </section>
  )
}
