import React from 'react';
import './Hero.css';
import Header from '../header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter'

import { motion } from 'framer-motion';

const Hero = () => {
    const transition = { type: 'spring', duration: 3 };
    // for  mobile screen 
    const mobile = window.innerWidth<=768 ? true: false;
    return (
        <div className="hero" id='home'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />

                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile? "178px":'238px' }}
                        animate={{ left: '0px' }}
                        transition={transition}
                    >
                    </motion.div>
                    <span>the best fitness club in the town</span>
                </div>
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape</span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            IDEAL BODY IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL<br></br> BODY AND LIVE UP YOUR LIFE TO FULLEST
                        </span>
                    </div>
                </div>

                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={150} start={100} delay='4' preFix="+" />
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter end={988} start={800} delay='4' preFix="+" />
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter end={50} start={0} delay='4' preFix="+" />
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>

                <motion.div 
                initial={{ right: '-1rem' }}
                animate={{ right: '4rem' }}
                transition={transition}
                div className="heart-rate">
                    <img src={Heart} alt="Heart Rate" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                <img src={hero_image} alt="Hero" className="hero-image" />
                <motion.img
                initial={{ right: '11rem' }}
                animate={{ right: '20rem' }}
                transition={transition}
                src={hero_image_back} alt="Hero Background" className="hero-image_back" />

                <motion.div 
                 initial={{ right: '37rem' }}
                 animate={{ right: '28rem' }}
                 transition={transition}
                div className="calories">
                    <img src={Calories} alt="Calories Burned" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;
