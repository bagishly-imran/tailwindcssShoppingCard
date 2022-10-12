import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { totalBasket } from '../../utils/totalCount/totalCount'
import MyOrders from './components/myOrders/MyOrders'
import Search from './components/search/Search'

const Categories = lazy(() => import('./components/categories/Categories'))
const MainCategories = lazy(() => import('./components/mainCategories/MainCategories'))
const Basket = lazy(() => import('./components/basket/Basket'))



const Navbar = () => {

  const [openMainCategories, setOpenMainCategories] = useState(false);
  const {my_basket} = useSelector(state => state.my_basket);
  const [openMyBasket, setOpenMyBasket] = useState(false);
  const [basketCount, setBasketCount] = useState(0)

  const style = {
    backgroundColor: '#fffff',
    borderBottom: '1px solid #cecece',
  }
  
  useEffect(() => {

    if(my_basket) {
      setBasketCount(totalBasket(my_basket))
    }

  },[my_basket])
  

  return (
    <header style={style}>
        <div className = 'header-one container mx-auto relative flex justify-between items-center py-2'>
          <Link to = '/' className = 'logo'>
            <h1>LOGO</h1>
          </Link>

          <div className = 'create-and-params-menu flex justify-between gap-4'>
              <a href = '#' className = 'hover:underline' rel="noreferrer nofollow" >Mağazanı yarat</a>
              <a href = '#' className = 'hover:underline' rel="noreferrer nofollow">Yardım </a>
              <div className = 'flex'>
                <img 
                  src = {'https://icons.iconarchive.com/icons/wikipedia/flags/1024/TR-Turkey-Flag-icon.png'} 
                  width = '20px' 
                  height='20px'
                  alt='Turkey Flag'
                />
                <select style = {{outline: 'none'}}> 
                  <option>İstanbul  |  TR  |  TRY</option>
                </select>
              </div>
          </div>

        <Search/>

        <MyOrders
          openMyBasket = {openMyBasket} 
          setOpenMyBasket = {setOpenMyBasket}      
          basketCount = {basketCount}    
        />

        <Suspense fallback = ''>

          {
            openMyBasket && (
              
              <Basket 
                openMyBasket = {openMyBasket} 
                setOpenMyBasket = {setOpenMyBasket}
                basketCount = {basketCount}
                my_basket = {my_basket}
              />

            ) 
          }
          
        </Suspense>

        </div>

        <Suspense fallback = ''>
          <Categories 
            openMainCategories = {openMainCategories}
            setOpenMainCategories = {setOpenMainCategories}
          />

          
          <MainCategories
            openMainCategories = {openMainCategories}
            setOpenMainCategories = {setOpenMainCategories}          
          />

        </Suspense>

    </header>
  )
}

export default Navbar