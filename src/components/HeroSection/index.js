import React, {useState} from 'react';
import Video from '../../videos/Video.mov';
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mov'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>MOTs made simple and EASY!</HeroH1>
            <HeroP>
                Fast and easy MOTs at SJ MOTs Garage,
                starting at only £40
                WHAT are you waiting for?
            </HeroP>
            <HeroBtnWrapper>
                <Button to="booking" onMouseEnter={onHover} onMouseLeave={onHover}
                primary='true'
                dark='true'
                >
                    Get a slot {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection