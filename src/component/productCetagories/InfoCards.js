import React from 'react';
import InfoCard from './InfoCard';
import icon1 from '../../assets/Icons/Coffee-1.svg'
import icon2 from '../../assets/Icons/Coffee-2.svg'
import icon3 from '../../assets/Icons/coffee-3.svg'

const infoCards = () => {
    const products= [
        { _id: 1, title: "Black coffee", price: 24, details: "very beautiful", icon:icon1 },
        { _id: 2, title: "Milk coffee", price: 34, details: "very beautiful", icon:icon2 },
        { _id: 3, title: "Green coffee", price: 100, details: "very beautiful", icon:icon3},
    ]

    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          products.map(product => <InfoCard
                key={product.id}
                product={product}
            ></InfoCard>)
        }
    </div>
    );
};

export default infoCards;