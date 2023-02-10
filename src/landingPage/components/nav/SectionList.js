import React from 'react';
import './SectionList.scss';

function SectionList() {

    return (
        <nav className='sectionlist sectionlist--border'>

            <button className='sectionlist__title-btn sectionlist__title-btn--border'>
                <h2>소개</h2>
            </button>

            <button className='sectionlist__title-btn sectionlist__title-btn--border'>
                <h2>추천</h2>
            </button>

            <button className='sectionlist__title-btn sectionlist__title-btn--border'>
                <h2>참가 자격</h2>
            </button>

            <button className='sectionlist__title-btn sectionlist__title-btn--border'>
                <h2>참여 방법</h2>
            </button>

            <button className='sectionlist__title-btn sectionlist__title-btn--border'>
                <h2>진행 일정</h2>
            </button>

            <button className='sectionlist__title-btn sectionlist__title-btn--border'>
                <h2>미션</h2>
            </button>

            <button className='sectionlist__title-btn sectionlist__title-btn--border'>
                <h2>리워드</h2>
            </button>

            <button className='sectionlist__title-btn sectionlist__title-btn--border'>
                <h2>출제 위원</h2>
            </button>

            <button className='sectionlist__title-btn sectionlist__title-btn--border'>
                <h2>난이도</h2>
            </button>

            <button className='sectionlist__title-btn sectionlist__title-btn--border'>
                <h2>유의사항</h2>
            </button>

        </nav>

    )
}

export default SectionList;