import React from 'react';
import { Difficulty, Header, Instructions, Introduce, Method, Mission, Recommend, Reward, Schedule, SectionList, Member } from '../components';
import './LandingPage.scss';
import './reset.css';
import './font.css';

function LandingPage() {

    return (
        <div className='box'>

            <Header/>

            <SectionList/>

            <Introduce/>

            <section className='recommend'>
                <Recommend/>
            </section>

            <section className='method'>
                <Method/>
            </section>

            <section className='schedule'>
                <Schedule/>
            </section>

            <section className='mission'>
                <Mission/>
            </section>

            <section className='reward'>
                <Reward/>
            </section>

            <section className='member'>
                <Member/>
            </section>

            <section className='difficulty'>
                <Difficulty/>
            </section>

            <section className='instructions'>
                <Instructions/>
            </section>

            <footer>

            </footer>
        </div>
    )
}

export default LandingPage;