import React from 'react'

function Stat({ combineData, currentMonth }) {
    return (
        <div className='mt-[5%]'>
            <h1 className='text-[1.5rem] font-bold text-center my-3'>Statistics - {currentMonth}</h1>
            <div className='p-5 bg-white rounded-lg shadow-2xl w-[30%] mx-auto'>
                <h3 className='text-[1.2rem] font-semibold'>Total sale: <span className='font-normal text-[1.1rem]'>{combineData[0]?.statistics?.data?.totalSaleAmount}</span></h3>
                <h3 className='text-[1.2rem] font-semibold'>Total sold item: <span className='font-normal text-[1.1em]'>{combineData[0]?.statistics?.data?.totalNumSold}</span></h3>
                <h3 className='text-[1.2rem] font-semibold'>Total not sold item: <span className='font-normal text-[1.1rem]'>{combineData[0]?.statistics?.data?.totalNumNotSold}</span></h3>
            </div>
        </div>
    )
}

export default Stat
