import React from 'react';
import Blogs from '../Blogs/Blogs';
import Footer from '../Shared/Footer/Footer';
import Stats from '../Stats/Stats';
import Story from '../Story/Story';
import Teams from '../Team/Teams';
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
            <Teams></Teams>
            <Stats></Stats>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;