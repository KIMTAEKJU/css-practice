import React from 'react';
import DesktopImg from '../../../assets/PC.png';
import MobileImg from '../../../assets/Mobile.png';
import TabletImg from '../../../assets/Tablet.png';

import './Header.scss';

function Header() {

    return (
        <section className='header'>
            <img className='header__desktop-img' src={DesktopImg}/>
            <img className='header__tablet-img' src={TabletImg}/>
            <img className='header__mobile-img' src={MobileImg}/>
        </section>
    )
}

export default Header;