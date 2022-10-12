import React, { lazy, memo, Suspense,} from 'react'

const PageStep = lazy(() => import('./components/pageStep/PageStep'))
const CategoryFilter = lazy(() => import('./components/categoryFilter/CategoryFilter'))
const Cards = lazy(() => import('./components/cards/Cards'))
const Filtered = lazy(() => import('./components/filtered/Filtered'))

const Home = () => {


  return (
    <div className = 'home-content  bg-[#cecece]'>

        

      <div className = 'home-body container mx-auto relative'>
        
        <Suspense fallback = ''>

          <PageStep/>

          <CategoryFilter/>

          <div className = 'filter-and-content flex py-5 gap-4'>

            <Filtered/>

            <Cards/>

          </div>

        </Suspense>
      </div>



    </div>
  )
}

export default memo(Home)