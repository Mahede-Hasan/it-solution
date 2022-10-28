import React from 'react';
import Blogs from '../Blogs/Blogs';
import Reviews from '../Review/Reviews';
import Stats from '../Stats/Stats';
import Story from '../Story/Story';
import WorksPolicy from '../WorksPolicy/WorksPolicy';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Story></Story>
            <WorksPolicy></WorksPolicy>
            <Stats></Stats>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;