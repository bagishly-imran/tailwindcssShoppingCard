import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom';
import Star from '../../../../../images/star.png';
import './sass/card.scss';

const Card = (props) => {

    const [addFavorite, setAddFavorite] = useState(false);

    const style = {
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
    }

    const textOverflow = {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }

    const hoverImageSize = {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    }

    const styleZoom = {
        color: 'rgba(255, 255, 255, 0.8)',
    }



  return (
    <div className = 'my-card flex-col w-[260px] rounded-[8px] relative' style = {style}>

        <button 
            onClick = {() => {setAddFavorite(!addFavorite)}}    
            className = 'favorite-btn absolute top-10 right-0 bg-[#fff] p-2 px-3 rounded-l-[20px]'
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill={addFavorite ? '#ff0000' : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke={addFavorite ? '#ff0000' : 'currentColor'} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        </button>

        <div className = 'card-image relative'>
            <img 
                src = {props.tshirt.image} 
                className='rounded-t-[8px]'
                loading='lazy'
                alt = {props.tshirt.title}
            />

            <div className = 'zoom-image w-full h-full flex flex-col items-center justify-around absolute bottom-[-40px] text-[#acacac] opacity-0'>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style = {styleZoom} className="w-[80px] h-[80px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                </svg>
                
                <div className = 'flex justify-center px-2 gap-2 w-auto rounded-[4px]' style = {hoverImageSize}>
                    <h1 className = 'text-xl'>S</h1>
                    <h1 className = 'text-xl'>M</h1>
                    <h1 className = 'text-xl'>L</h1>
                    <h1 className = 'text-xl'>XL</h1>
                    <h1 className = 'text-xl'>XXL</h1>
                    <h1 className = 'text-xl'>XXXL</h1>
                </div>


            </div>

        </div>

        <Link to = {`/${props.tshirt.id}`} className = 'flex flex-col p-3 bg-[#fff] gap-1 rounded-b-[8px]'>
            <h1 className = ''>{props.tshirt.title}</h1>
            <div className = 'my-card-rating flex gap-1.5'>
                <img src = {Star} alt = 'rating icon' />
                <img src = {Star} alt = 'rating icon' />
                <img src = {Star} alt = 'rating icon' />
                <img src = {Star} alt = 'rating icon' />
                <img src = {Star} alt = 'rating icon' />
            </div>

            <h5 className = 'text-[#666666]' style = {textOverflow}>
                {props.tshirt.sub_title} 
            </h5>

            <div className = 'my-card-prices flex items-end py-1 gap-1'>

                <u className = 'text-[#A5A5A5] text-sm' style = {{textDecoration: 'line-through'}}>
                    {props.tshirt.price} TL
                </u>

                <h4 className = ''>
                    {props.tshirt.discount_price} TL
                </h4>

            </div>

            <div className = 'available-colors flex items-center gap-2 py-1'>

                <div className = 'border-2 border-solid border-[#D9D9D9] rounded-full'>
                    <div className = 'border-2 border-solid border-[#fff] rounded-full'>
                        <div className = {`bg-[#${props.tshirt?.color_one}] rounded-full w-[16px] h-[16px]`}>
                        </div>
                    </div>
                </div>

                <div className = {`bg-[#${props.tshirt.color_two}] rounded-full w-[16px] h-[16px]`}>

                </div>

            </div>

        </Link>

    </div>
  )
}

export default memo(Card)