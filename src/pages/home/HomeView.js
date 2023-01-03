import React from 'react';
import Header from '../../component/header/Header';
import InfoCards from '../../component/productCetagories/InfoCards';



const HomeView = () => {
    return (
        <div className='w-11/12 mx-auto'>
           <Header/>
          <InfoCards/>
        </div>
    );
};

export default HomeView;