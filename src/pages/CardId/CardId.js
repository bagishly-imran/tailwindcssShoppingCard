import React, { useEffect, useState } from 'react'
import PageStep from '../home/components/pageStep/PageStep'
import Star from '../../images/star.png';
import DiscountImg from '../../images/40discount.png';
import CargoImg from '../../images/cargo.png';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTshirtsId } from '../../store/actions/tshirtsActions';
import { addQuantityBasket, addToMyBasket } from '../../store/actions/basketActions';



const CardId = () => {

    const dispatch = useDispatch();
    const {id} = useParams();
    const {tshirt_id} = useSelector(state => state.tshirts)
    const {my_basket} = useSelector(state => state.my_basket);
    const [count, setCount] = useState(1);
    const [addToBasket, setAddToBasket] = useState({})


    useEffect(() => {

        dispatch(getTshirtsId(id))

    },[])

    useEffect(() => {

        setAddToBasket({...tshirt_id, count: count})

    },[count, tshirt_id])
    

    const addMyBasket = () => {

        if(my_basket.length >= 1) {

            if(my_basket.find(basket => basket.id === addToBasket.id)) {
                dispatch(addQuantityBasket(addToBasket))

            } else {
                dispatch(addToMyBasket(addToBasket))
                setAddToBasket({...tshirt_id, count: count})
            }
        } else {
            dispatch(addToMyBasket(addToBasket))            
            setAddToBasket({...tshirt_id, count: count})
        }

    }

  return (
    <div className='card-id bg-[#cecece]'>

        <div className = 'card-id-body container mx-auto pb-9 relative'>
            <PageStep/>
            
            <div className = 'card-id-content w-full bg-[#fff] p-5 rounded-[4px] flex gap-4'>

                <div className = 'card-id-images flex gap-4'>
                    <div className = 'card-id-image-list flex flex-col items-center justify-center'>

                        <svg xmlns="http://www.w3.org/2000/svg" style={{boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'}} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>


                        <img 
                            src={tshirt_id?.image}  
                            className='rounded-[4px]'
                            width = '120px'
                            alt = 'Karusel özüm etmədim)' 
                        />
                        <img 
                            src={tshirt_id?.image}  
                            className='rounded-[4px]'
                            width = '120px'
                            alt = 'Karusel özüm etmədim)' 
                        />
                        <img 
                            src={tshirt_id?.image}  
                            className='rounded-[4px]'
                            width = '120px'
                            alt = 'Karusel özüm etmədim)' 
                        />

                        <svg xmlns="http://www.w3.org/2000/svg" style = {{boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'}} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>


                    </div>
                    <img 
                        src={tshirt_id?.image}  
                        // width='350px'

                        alt = 'Karusel özüm etmədim)' 
                    />
                </div>

                <div className='card-id-information px-2 flex flex-col gap-5'>

                    <div className = 'card-id-info-caption flex flex-col gap-6'>
                        <h1 className = 'text-2xl'>{tshirt_id?.title}</h1>
                        <p>Satıcı: <strong>Koton 9.5</strong></p>
                        <div className = 'card-id-rating flex items-center gap-2'>
                            <strong>5</strong>
                            <img src={Star} width = '16px' height='16px' alt = 'rating'/>
                            <img src={Star} width = '16px' height='16px' alt = 'rating'/>
                            <img src={Star} width = '16px' height='16px' alt = 'rating'/>
                            <img src={Star} width = '16px' height='16px' alt = 'rating'/>
                            <img src={Star} width = '16px' height='16px' alt = 'rating'/>
                        </div>

                        <div className = 'card-id-prices flex gap-2 items-end'>
                            <h3 className = 'text-[#A5A5A5]' style = {{textDecoration: 'line-through'}}>
                                {tshirt_id?.price} TL
                            </h3>

                            <h1 className = 'text-2xl text-[#FF0000]'>
                                {tshirt_id?.discount_price} TL
                            </h1>

                        </div>
                    </div>

                    <div className = 'special-offers flex gap-4'>
                        <div className = 'card-id-available-colors p-3 border border-[#E9E9E9] rounded-[4px]'>
                            <h4>Renk</h4>
                            <div className = 'flex gap-2 pt-2'>
                                <img 
                                    src = {tshirt_id?.image} 
                                    width = '70px'  
                                    alt = 'product'
                                />
                                <img 
                                    src = {tshirt_id?.image} 
                                    width = '70px'  
                                    alt = 'product'
                                />
                                <img 
                                    src = {tshirt_id?.image} 
                                    width = '70px'  
                                    alt = 'product'
                                />
                                <img 
                                    src = {tshirt_id?.image} 
                                    width = '70px'  
                                    alt = 'product'
                                />
                                <img
                                     src = {tshirt_id?.image} 
                                     width = '70px'  
                                     alt = 'product'
                                    />
                                <img
                                     src = {tshirt_id?.image} 
                                     width = '70px'  
                                     alt = 'product'
                                />
                            </div>
                        </div>

                        <img src = {CargoImg} width = '80px' alt = 'cargo'/>
                        <img src = {DiscountImg} width = '80px' alt = 'discount'/>
                    </div>

                    <div className = 'size-and-quantity flex py-4 gap-4'>

                        <div className = 'size-list '>
                            <div className = 'flex justify-between items-center py-2'>
                                <h5>Beden</h5>
                                <a href = '#' rel="noreferrer nofollow" className = 'text-sm underline-offset-1 text-[#A6A6A6] underline'>Beden Tablosu</a>
                            </div>
                            <select className = 'border border-[#E6E6E6] p-2 text-[#A6A6A6] w-[240px] rounded-[6px] bg-[#FAF9F9]' style = {{outline: 'none'}}>
                                <option>Beden seçiniz</option>
                            </select>
                        </div>

                        <div className = 'card-id-quantity'>
                            <h5 className = 'py-2'>Adet</h5>
                            <div className = 'flex border rounded-[6px] border-[#E6E6E6]'>
                                <button className = 'p-2 text-[#A6A6A6]' onClick={() => {setCount(count - 1)}} disabled = {count <= 1 ? true : false}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                    </svg>
                                </button>
                                <h4 className = 'w-[145px] p-2 flex justify-center items-center border-x bg-[#E6E6E6]'>
                                    {count}
                                </h4>
                                <button className = 'p-2 text-[#A6A6A6]' onClick={() => {setCount(count + 1)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className = 'order-params flex gap-2 pt-10'>
                            <button className = 'p-2 text-[#A6A6A6] border border-[#E6E6E6] rounded-[6px] w-[85px] flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                                </svg>
                            </button>

                            <button className = 'p-2 text-[#A6A6A6] border border-[#E6E6E6] rounded-[6px] w-[85px] flex justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                            </button>

                        </div>

                    </div>

                    <div className = 'card-id-info-cargo flex justify-between'>
                        <h6 className = 'text-[#a5a5a5] text-[12px]'>
                            Tahmini Teslimat: <strong className='text-[#000000]'>12 - 26 Haziran</strong>
                        </h6>

                        <div className = 'flex text-[12px] gap-6'>
                            <h6 className = ''>Fiyat Alarmı</h6>

                            <h6 className = 'text-[#a5a5a5] mr-[10px]'>Favori: <strong className = 'text-[#000000]'>1565</strong></h6>
                        </div>
                    </div>

                    <div className = 'card-id-btns flex gap-4'>
                        <button className = 'p-2 bg-[#0BC15C] text-[#fff] w-[230px] rounded-[100px]'>
                            HEMEN AL
                        </button>
                        <button
                            onClick = {() => {addMyBasket(addToBasket)}}
                            className = 'p-2 bg-[#ff0000] text-[#fff] w-[230px] rounded-[100px]'>
                            SEBETE EKLE
                        </button>
                    </div>
                </div>



            </div>
        </div>

    </div>
  )
}

export default CardId