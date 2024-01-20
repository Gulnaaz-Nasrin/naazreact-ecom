import React from 'react'
import HeroSection from './components/heroSection';
import Services from './components/services';
import Trusted from './components/trusted';

const Home = () => {
    const data = {
        text: "naaz store"
    }
    return (
        <React.Fragment>
            <HeroSection myText={data} />
            <Services />
            <Trusted />
        </React.Fragment>
    )
}

export default Home;
