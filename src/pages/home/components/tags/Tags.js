import React from 'react'

const Tags = () => {
  return (
    <div className = 'flex w-full p-2 gap-2'>

        <div className = 'flex gap-2 w-[90px] justify-between items-center border border-[#BBBBBB] rounded-[6px] p-1 px-2 bg-[#fff]'>
            <span>Kadın</span>
            <button className = 'text-[#BBBBBB] '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <div className = 'flex gap-2 w-[90px] justify-between items-center border border-[#BBBBBB] rounded-[6px] p-1 px-2 bg-[#fff]'>
            <span>Alet</span>
            <button className = 'text-[#BBBBBB] '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <div className = 'flex gap-2 w-[90px] justify-between items-center border border-[#BBBBBB] rounded-[6px] p-1 px-2 bg-[#fff]'>
            <span>Bere</span>
            <button className = 'text-[#BBBBBB] '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        
        <div className = 'flex gap-2 w-[90px] justify-between items-center border border-[#BBBBBB] rounded-[6px] p-1 px-2 bg-[#fff]'>
            <span>Bluz</span>
            <button className = 'text-[#BBBBBB] '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

    </div>  
  )
}

export default Tags