import React from 'react';

import DesktopWebp from '../../../assets/PC.webp';
import TabletWebp from '../../../assets/Tablet.webp';
import MobileWebp from '../../../assets/Mobile.webp';

import DesktopAvif from '../../../assets/PC.avif';
import TabletAvif from '../../../assets/Tablet.avif';
import MobileAvif from '../../../assets/Mobile.avif';

import DesktopImg from '../../../assets/PC.png';
import MobileImg from '../../../assets/Mobile.png';
import TabletImg from '../../../assets/Tablet.png';

import './Header.scss';

function Header() {

    return (
        <div className='banner'>
            <picture>
                <source 
                    className='banner__img' 
                    srcSet={`${MobileAvif} 370w, ${TabletAvif} 768w, ${DesktopAvif} 1200w`}
                    type="image/avif"
                />
                <source
                    type="image/webp"
                    className='banner__img' 
                    srcSet={`${MobileWebp} 370w, ${TabletWebp} 768w, ${DesktopWebp} 1200w`}
                />
                <img 
                    className='banner__img' 
                    src={DesktopImg}
                    srcSet={`${MobileImg} 370w ${TabletImg} 768w ${DesktopImg} 1200w`}
                />
            </picture>
        </div>
    )
}

export default Header;