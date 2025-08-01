import React from 'react'
import { Link } from 'react-router-dom'
const Card = (props) => {
    return (
        <>
        <Link to={`/card_detail/${props.id}`} >
            <div className='rounded-md overflow-hidden shadow-lg bg-white'>
                <img className='w-full h-60 object-cover' src={props.imageUrl} alt={props.title} />
                <div className='px-6 py-4'>
                    <h2 className='font-bold text-xl mb-2'>{props.title}</h2>
                    <p className='text-gray-700 text-base'>
                        {props.description}
                    </p>
                </div>
                <div className='px-6 py-4 flex items-center justify-between'>
                    <span className='text-gray-600 text-sm'>#tag</span>
                    <a href="" className='text-purple-500 hover:text-purple-700'>Read Mote</a>
                </div>
            </div>
        </Link>
        </>
    )
}

export default Card