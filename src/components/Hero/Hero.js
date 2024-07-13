import './hero.css'
import React, { useEffect, useState } from 'react'
import RealEstate from '../../assets/real-estate.svg'
import Rewards from '../../assets/annual-rewards.svg'
import TokensGrowth from '../../assets/tokens-growth.svg'
import Arrow from '../../assets/circle-arrow-down.svg'
import HeroImg from '../../assets/hero-img.svg'

const Hero = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-07-31') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const calculateStrokeDashoffset = (value, total) => {
    const circumference = 2 * Math.PI * 45;
    return circumference - (value / total) * circumference;
  };

  return (
    <div className='hero-container'>
      <div className='hero-main-container'>
        <div className='hero'>
          <div className='hero-content'>
            <h1>We are Tokenizing Airbnb Real Yield <span>backed by Real Estate</span></h1>

            {/* Benefits */}
            <div className='benefits-container'>
              <div className='benefit-container'>
                <img src={RealEstate} alt='Become a co-cost of real estate on blockchain' />
                <h4>Become a co-cost of real estate on blockchain</h4>
              </div>
              <div className='benefit-container'>
                <img src={Rewards} alt='Receive up to 65% APY of annual Rewards' />
                <h4>Receive up to 65% APY of annual Rewards</h4>
              </div>
              <div className='benefit-container'>
                <img src={TokensGrowth} alt='potential profit on token’s growth' />
                <h4>potential profit on token’s growth</h4>
              </div>
            </div>

            {/* CountDown */}
            <div className='countdown-container'>
              <h4>COUNTDOWN</h4>  
              <h2>to token sale end</h2>
              <div className="timer-container">
                <div className="timer">
                  <svg width="100" height="100">
                    <circle className="circle-bg" cx="50" cy="50" r="45"></circle>
                    <circle
                      className="circle-fg"
                      cx="50"
                      cy="50"
                      r="45"
                      style={{
                        strokeDashoffset: calculateStrokeDashoffset(timeLeft.days, 365),
                      }}
                    ></circle>
                  </svg>
                  <h2>{timeLeft.days}</h2>
                  <p>DAYS</p>
                </div>
                <div className="timer">
                  <svg width="100" height="100">
                    <circle className="circle-bg" cx="50" cy="50" r="45"></circle>
                    <circle
                      className="circle-fg"
                      cx="50"
                      cy="50"
                      r="45"
                      style={{
                        strokeDashoffset: calculateStrokeDashoffset(timeLeft.hours, 24),
                      }}
                    ></circle>
                  </svg>
                  <h2>{timeLeft.hours}</h2>
                  <p>HOURS</p>
                </div>
                <div className="timer">
                  <svg width="100" height="100">
                    <circle className="circle-bg" cx="50" cy="50" r="45"></circle>
                    <circle
                      className="circle-fg"
                      cx="50"
                      cy="50"
                      r="45"
                      style={{
                        strokeDashoffset: calculateStrokeDashoffset(
                          timeLeft.minutes,
                          60
                        ),
                      }}
                    ></circle>
                  </svg>
                  <h2>{timeLeft.minutes}</h2>
                  <p>MIN</p>
                </div>
                <div className="timer">
                  <svg width="100" height="100">
                    <circle className="circle-bg" cx="50" cy="50" r="45"></circle>
                    <circle
                      className="circle-fg"
                      cx="50"
                      cy="50"
                      r="45"
                      style={{
                        strokeDashoffset: calculateStrokeDashoffset(timeLeft.seconds, 60),
                      }}
                    ></circle>
                  </svg>
                  <h2>{timeLeft.seconds}</h2>
                  <p>SEC</p>
                </div>
              </div>
            </div>

            {/* Buy Token Button */}
            <button className='buy-token-btn'>
              Buy Token
              <img src={Arrow} alt='Arrow' />
            </button>

          </div>
          <div className='hero-img'>
            <img src={HeroImg} alt='img' style={{borderRadius:'38px'}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero