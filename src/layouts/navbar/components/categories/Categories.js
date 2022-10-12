import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategoryList } from '../../../../store/actions/categoriesActions'

const Categories = ({openMainCategories, setOpenMainCategories}) => {

    const dispatch = useDispatch()
    const {category_list} = useSelector(state => state.categories)

    const styleBtn = {
        boxShadow: '0px 3px 7px rgba(217, 7, 9, 0.2)',
        borderRadius: '4px',
        padding: '5px',
    }

    useEffect(() => {

        dispatch(getCategoryList())

    },[])

  return (
    <div className = 'bg-[#fff]'>

        <div className = 'container mx-auto flex items-center justify-between py-2 gap-2'>
            
            <button 
                onClick={() => {setOpenMainCategories(!openMainCategories)}}
                className = 'main-category-btn'
                style = {styleBtn}
            >
                {
                    openMainCategories ? (

                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ff0000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ff0000" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    ) : (

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )
                }
            </button>

            {
                category_list && category_list.map(category => {
                    return (

                        <Link to = '/' style = {{fontSize: '13px'}} key = {category.id}>{category.category_name}</Link>
                    )
                })
            }

        </div>
    </div>
  )
}

export default memo(Categories)