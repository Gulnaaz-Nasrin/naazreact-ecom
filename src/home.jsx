import React from 'react'
import HeroSection from './components/heroSection';

const Home = () => {
    const data = {
        text: "naaz store"
    }
    return (
        <React.Fragment>
            <HeroSection myText={data} />
        </React.Fragment>
    )
}

export default Home;
