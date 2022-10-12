import React from 'react'

const Search = () => {

    const style = {
        width: 'auto',
        minWidth: '400px',
        backgroundColor: '#C4C4C4',
        borderRadius: '30px',
        boxSizing: 'border-box !important',
    }

    const styleBtn = {
        backgroundColor: '#ff0000',
        borderRadius: '15px',
        right: '6px',
        color: '#fff',
    } 

    const styleInp = {
        backgroundColor: 'transparent', 
        outline: 'none',
        color: 'rgba(0, 0, 0, 0.4)',
    }

  return (
    <div className='search-content flex items-center p-2 gap-2 relative' style = {style}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>

        <input type = 'text' style={styleInp} placeholder='Aradığınız herşey burada'/>

        <button className = 'p-1 px-2 flex absolute' style = {styleBtn}>Arama yap</button>
    </div>
  )
}

export default Search