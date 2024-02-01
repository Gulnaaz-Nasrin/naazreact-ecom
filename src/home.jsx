import React from 'react'
import HeroSection from './components/heroSection';
import Services from './components/services';
import Trusted from './components/trusted';
import FeatureProducts from './components/featureProduct';

const Home = () => {
    const data = {
        text: "MALL of ASIA"
    }
    return (
        <React.Fragment>
            <HeroSection myText={data} />
            <FeatureProducts />
            <Services />
            <Trusted />
        </React.Fragment>
    )
}

export default Home;
