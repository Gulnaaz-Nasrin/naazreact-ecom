import React from 'react'
import HeroSection from './components/heroSection';
import { useProductContext } from './context/productContext';

function About() {
  const { myName } = useProductContext();
  const data = {
    text: "The Wow Factor"
  }
  return (
    <React.Fragment>
      {myName}
      <HeroSection myText={data} />
    </React.Fragment>
  )
}

export default About;