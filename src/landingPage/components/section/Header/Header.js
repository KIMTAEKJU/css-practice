import React from 'react';

import DesktopWebp from '../../../assets/images/bg/PC.webp';
import TabletWebp from '../../../assets/images/bg/Tablet.webp';
import MobileWebp from '../../../assets/images/bg/Mobile.webp';

import DesktopAvif from '../../../assets/images/bg/PC.avif';
import TabletAvif from '../../../assets/images/bg/Tablet.avif';
import MobileAvif from '../../../assets/images/bg/Mobile.avif';

import DesktopImg from '../../../assets/images/bg/PC.png';
import MobileImg from '../../../assets/images/bg/Mobile.png';
import TabletImg from '../../../assets/images/bg/Tablet.png';

import './Header.scss';

function Header() {

    return (
        <div className='banner'>
            <picture>
                <source 
                    className='banner__img'
                    media='(max-width: 768px)'
                    srcSet={MobileAvif}
                    src={MobileAvif}
                    // sizes="(max-width: 768px) 767px, (max-width: 1199px) 1199px, (max-width: 1920px) 1920px"
                    type="image/avif"
                />

                <source 
                    className='banner__img'
                    media='(max-width: 1199px)'
                    srcSet={TabletAvif}
                    src={TabletAvif}
                    // sizes="(max-width: 768px) 767px, (max-width: 1199px) 1199px, (max-width: 1920px) 1920px"
                    type="image/avif"
                />

                <source 
                    className='banner__img'
                    media='(max-width: 1920px)'
                    srcSet={DesktopAvif}
                    src={DesktopAvif}
                    // sizes="(max-width: 768px) 767px, (max-width: 1199px) 1199px, (max-width: 1920px) 1920px"
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
                    // sizes="(min-width: 375px) 767px, (min-width: 768px) 1199px, (min-width: 1200px) 1920px"
                    srcSet={`${MobileImg} 370w ${TabletImg} 768w ${DesktopImg} 1200w`}
                />
            </picture>
        </div>
    )
}

export default Header;