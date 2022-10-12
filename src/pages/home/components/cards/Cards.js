import React, { lazy, memo, Suspense, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'
import { getTshirts } from '../../../../store/actions/tshirtsActions'
import Loading from '../../../../utils/loading/Loading'
import MoreDataLoading from '../../../../utils/moreDataLoading/MoreDataLoading'

const Card = lazy(() => import('./Card/Card'))
const Tags = lazy(() => import('../tags/Tags'))

const Cards = () => {

    const dispatch = useDispatch()
    const {tshirts_list, loading} = useSelector(state => state.tshirts);
    const [hasMore, setHasMore] = useState(true);

    const [items, setItems] = useState(Array.from({length: 8}))

    useEffect(() => {

        dispatch(getTshirts());

    },[])

    const fetchMoreData = () => {

        if(items.length >= tshirts_list.length) {

            setItems(tshirts_list);
            setHasMore(false)

        } else {
            
            setTimeout(() => {
              setItems(
                items.concat(Array.from({ length: 4 }))
              );
              setHasMore(true)
            }, 1500);
        }

    };


  return (
    <div className = {`flex gap-2 flex-col w-full `}>

            <Suspense fallback = ''>
                <Tags/>
            </Suspense>

            {
                loading ? (
                    
                    <Loading/>

                ) : tshirts_list && (

                    <InfiniteScroll
                    dataLength={items.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<MoreDataLoading/>}
                    className = {`flex flex-wrap gap-2 `}
                  >
                    {

                        items &&items.map((i, index) => (

                            tshirts_list.map((tshirt, i) => {
                                return (
                                    index == i && (
                                        <Suspense fallback = '' key = {tshirt.id}>
                                        
                                            <Card tshirt = {tshirt} key = {tshirt.id}/>
                                        </Suspense>
                                    )
                                )
                            })

                        ))
                    }
                  </InfiniteScroll>
          
                )
            }


    </div>
  )
}

export default memo(Cards)