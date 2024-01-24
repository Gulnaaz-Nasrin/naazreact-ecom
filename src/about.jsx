import React from 'react'
import HeroSection from './components/heroSection';

function About() {
  const data = {
    text: "The Wow Factor"
  }
  return (
    <React.Fragment>
      <HeroSection myText={data} />
    </React.Fragment>
  )
}

export default About;