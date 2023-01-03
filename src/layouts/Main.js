import React from 'react';
import { Outlet } from 'react-router-dom';
import Navpage from '../component/common/navbar/Navpage';

const Main = () => {
    return (
        <div>
            <Navpage />
            <Outlet></Outlet>
        </div>
    );
};

export default Main;