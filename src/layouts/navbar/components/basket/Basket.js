import React, { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addQuantityBasket, decrementQuantityBasket, deleteProductId } from '../../../../store/actions/basketActions';
import { totalAllPrice } from '../../../../utils/basketTotalAllPrice/basketTotalAllPrice';
import './sass/basket.scss';

const Basket = (props) => {

    const dispatch = useDispatch();
    const [allTotalPrice, setAllTotalPrice] = useState(0);
    const [incrementProductId, setIncrementProductId] = useState({});
    const [decrementProductId, setDecrementProductId] = useState({});


    useEffect(() => {

        setAllTotalPrice(totalAllPrice(props.my_basket))

    },[props.my_basket])

    useEffect(() => {

        incrementProduct();

    },[incrementProductId])

    useEffect(() => {

        decrementProduct();

        decrementDeleteProductId(props.my_basket)

    },[decrementProductId])




    const incrementProduct = () => {
        dispatch(addQuantityBasket(incrementProductId))
    }

    const decrementProduct = () => {
        dispatch(decrementQuantityBasket(decrementProductId))
    }

    const decrementDeleteProductId = (arr) => {
        arr.filter(basket => basket.count === 0 && deleteProduct(basket.id))
    }


    const deleteProduct = (id) => {

        dispatch(deleteProductId(id))
    }

  return (
    <div className = 'basket-content h-3/4 w-[350px] bg-[#ff0000] absolute z-50 right-0  bottom-[-40px]' style = {{boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.1)'}}>

        <div className = 'basket-length-content bg-[#FEFEFE] p-3 flex justify-between' style={{boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.1)'}}>
            <h5 className = 'text-[#666666] text-sm'>ÜRÜN SAYI: <strong>{props.basketCount}</strong></h5>
            <button
                onClick={() => {props.setOpenMyBasket(false)}}
                className = 'basket-close'
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <div className = 'basket-cards bg-[#FEFEFE]'>

            {
                props.my_basket && (
                    props.my_basket.map(basket => {
                        return (

                            <div className = 'my-basket-card p-2 flex border-b gap-2 relative' key = {basket.id}>
                                <img 
                                    src = {basket.image}
                                    width = '80px' 
                                    alt = 'basket'

                                />
                                <div className='basket-card-info flex flex-col gap-1'>
                                    <h5 className = 'text-sm'>{basket.title}</h5>
                                    <p className = 'text-[12px]'>{basket.sub_title}</p>
                                    <h4 className = 'text-[#ff0000]'>{basket.discount_price * basket.count} TL</h4>

                                    <div className = 'flex w-[115px] border rounded-[6px] border-[#E6E6E6]'>
                                        <button className = 'p-2 text-[#A6A6A6]' onClick={() => {setDecrementProductId({basket, count: basket.count--})}} >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                            </svg>
                                        </button>
                                        <h4 className = 'p-2 flex w-9 justify-center items-center border-x bg-[#FAF9F9]'>
                                            {basket.count}
                                        </h4>
                                        <button className = 'p-2 text-[#A6A6A6]' onClick={() => {setIncrementProductId({basket, count: basket.count++})}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <button 
                                    onClick={() => {deleteProduct(basket.id)}}
                                    className='absolute right-2 top-0'
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                        )
                    })
                )
            }

            {
                props.my_basket.length == 0 && (
                    <div className = 'flex flex-col justify-center items-center h-[200px] text-[#cecece]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[80px] h-[80px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>

                        <h1>Sepet Boş</h1>
                    </div>
                )
            }


        </div>

        <div className = 'basket-total bg-[#fff] p-4 flex flex-col gap-2'>
            <div className = 'basket-total-price flex justify-between'>
                <h4 className = 'text-[#666666]'>TOPLAM:</h4>
                <h4 className = 'text-[#ff0000]'>{allTotalPrice.toFixed(2)} TL</h4>
            </div>
            <button className = 'basket-to-btn bg-[#ff0000] p-3 text-[#fff] w-full rounded-[6px]'>
                SEPETE GİT
            </button>
        </div>
    </div>
  )
}

export default memo(Basket)