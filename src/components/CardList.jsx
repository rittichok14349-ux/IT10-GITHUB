import React from 'react'
import cardData from '../services/cardData'
import Card from './Card'

const CardList = () => {
    return (
        <>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4'>
                {cardData.map(card => (
                    <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        imageUrl={card.imageUrl}
                    />
                ))}
            </div>
        </>
    )
}

export default CardList 