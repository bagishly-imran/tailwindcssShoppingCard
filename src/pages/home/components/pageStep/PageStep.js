import React from 'react'

const PageStep = () => {
  return (
    <div className = 'page-step flex justify-between items-center py-2.5'>
        <h5>
            Koton
        </h5>

        <h5 className = 'flex text-sm text-[#A5A5A5]'>
            Ana sayfa <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            Tüm Butikler <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            Koton
        </h5>
    </div>
  )
}

export default PageStep