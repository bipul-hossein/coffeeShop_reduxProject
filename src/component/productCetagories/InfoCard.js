
import React from 'react';

const InfoCard = ({ product }) => {
    const { title, price, icon } = product;
    console.log(product)
    return (
        <div className="card text-white p-6 md:card-side shadow-xl">
            <figure className='w-24'>
                <img src={icon} alt="Coffee" />
            </figure>
            <div className="card-body text-black">
                <h2 className="card-title">{title}</h2>
                <h3>Price:{price} TAKA</h3>
            </div>
        </div>
    );
};

export default InfoCard;