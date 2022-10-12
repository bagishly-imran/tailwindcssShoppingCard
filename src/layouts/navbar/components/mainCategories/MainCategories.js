import React, { memo, useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMainCategoryList } from '../../../../store/actions/categoriesActions';
import './sass/mainCategories.scss';
import Moda from '../../../../images/Moda.svg';
import Book from '../../../../images/Book.svg';
import Boot from '../../../../images/Boot.svg';
import Car from '../../../../images/Car.svg';
import Cosmetic from '../../../../images/Cosmetic.svg';
import Cream from '../../../../images/Cream.svg';
import Electronic from '../../../../images/Electronic.svg';
import Home from '../../../../images/Home.svg';
import Toster from '../../../../images/Toster.svg';
import Toys from '../../../../images/Toys.svg';
import { Link } from 'react-router-dom';



const MainCategories = ({openMainCategories, setOpenMainCategories}) => {

    const dispatch = useDispatch();
    const {main_categories} = useSelector(state => state.categories);

    const icons = [
        {id: 1, icon: Moda},
        {id: 2, icon: Cosmetic},
        {id: 3, icon: Boot},
        {id: 4, icon: Cream},
        {id: 5, icon: Toster},
        {id: 6, icon: Toys},
        {id: 7, icon: Book},
        {id: 8, icon: Home},
        {id: 9, icon: Electronic},
        {id: 10, icon: Car},
    ]

    useEffect(() => {

        if(openMainCategories && main_categories == null) {
            dispatch(getMainCategoryList())
        } 

    },[openMainCategories])

  return (
    <div className = {`main-categories bg-[#FEFEFE] absolute left-8  ${openMainCategories ? 'open-main-categories pt-3 py-3 p-2' : ''}`}>

        {
            main_categories && main_categories.map(category => {
                return(
                    <Link to = 'category' className = 'main-categories-btn flex relative justify-between p-2 w-full' key = {category.id}>
                        <span className = 'main-categories-btn-text flex gap-4 '>
                            
                            {
                                icons.filter(icon => {return icon.id == category.id}).map(ii => {
                                    return (
                                        <img 
                                            src={ii.icon} 
                                            className = 'main-categories-btn-img' width = {'19px'} height={'19px'} 
                                        />
                                    )
                                })
                            }
                            {category.category_name}
                        </span>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="main-categories-btn-svg w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </Link>
                )
            })
        }




    </div>
  )
}

export default memo(MainCategories)