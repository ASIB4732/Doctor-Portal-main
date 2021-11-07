import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Nevber from '../../Shared/navber/Nevber';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <Nevber></Nevber>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
            
        </div>
    );
};

export default Header;