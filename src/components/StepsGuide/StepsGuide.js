import React from 'react'
import './stepsguide.css'
import Star from '../../assets/star.svg'
import Info from '../../assets/info.svg'
import Shrimp from '../../assets/Shrimp.svg'
import Fish from '../../assets/Fish.svg'
import Dolphin from '../../assets/Dolphin.svg'
import Whale from '../../assets/Whale.svg'
import WalletCrypto from '../../assets/wallet-crypto.svg'
import Card from '../../assets/card.svg'
import Flooz from '../../assets/flooz.svg'

const StepsGuide = () => {
  return (
    <div className='steps'>
      {/* Step One */}
      <div className='steps-main-container'>
        <div className='title-container'>
          <h1>Quick 3-Steps Guide to Join the <span> Pre-CEX Listing Token Sale</span></h1>
          <div className='star-p'>
            <img src={Star} alt='img' />
            <p>Invest before Exchange Listingto get a Special Bonus</p>
          </div>
        </div>
        <div className='step-one-container'>
          <h4>STEP 1</h4>
          <h3>Choose the bonus package</h3>
          <p>You can participate on the STAY Pre-CEX Sale via crypto or card</p>.

          <div className='step-one-boxes'>
            <div className='step-one-box'>
              <div className='shrimp-content'>
                <h3>Shrimp</h3>
                <img src={Shrimp} alt='Shrimp' />
              </div>
              <h1>25%</h1>
              <div className='bonus-content'>
                <h3 className='bonus-title'>BONUS</h3>
                <img src={Info} alt='info' />
              </div>
              <h5>Linear Vesting</h5>
              <div className='month-content'>
                <h3>3 Months</h3>
                <img src={Info} alt='info' />
              </div>
            </div>

            <div className='step-one-box'>
              <div className='shrimp-content'>
                <h3>Fish</h3>
                <img src={Fish} alt='Fish' />
              </div>
              <h1>30%</h1>
              <div className='bonus-content'>
                <h3 className='bonus-title'>BONUS</h3>
                <img src={Info} alt='info' />
              </div>
              <h5>Linear Vesting</h5>
              <div className='month-content'>
                <h3>6 Months</h3>
                <img src={Info} alt='info' />
              </div>
            </div>

            <div className='step-one-box'>
              <div className='shrimp-content'>
                <h3>Dolphin</h3>
                <img src={Dolphin} alt='Dolphin' />
              </div>
              <h1>35%</h1>
              <div className='bonus-content'>
                <h3 className='bonus-title'>BONUS</h3>
                <img src={Info} alt='info' />
              </div>
              <h5>Linear Vesting</h5>
              <div className='month-content'>
                <h3>9 Months</h3>
                <img src={Info} alt='info' />
              </div>
            </div>

            <div className='step-one-box'>
              <div className='shrimp-content'>
                <h3>Whale</h3>
                <img src={Whale} alt='Whale' />
              </div>
              <h1>40%</h1>
              <div className='bonus-content'>
                <h3 className='bonus-title'>BONUS</h3>
                <img src={Info} alt='info' />
              </div>
              <h5>Linear Vesting</h5>
              <div className='month-content'>
                <h3>12 Months</h3>
                <img src={Info} alt='info' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step Two & Three */}
      <div className='step-two-three-container'>
        {/* Step Two */}
        <div className='step-two-container'>
          <h3>STEP 2</h3>
          <h2>Investment Amount</h2>
          <p>Enter the amount you wish to invest to find out how how many STAY tokens you will receive. </p>
          <div className='investment-amount-container'>
            <div className='invest-input'>
              <input type='number' placeholder='1' />
              <h3>USD</h3>
            </div>
            <h3>=</h3>
            <div className='price'>
              <h3>123,500.84</h3>
              <h4>STAYS</h4>
            </div>
          </div>

          <div className='bonus-stays'>
            <div className='title-bonus-stays'>
              <h4>+40% BONUS</h4>
              <h4>TOTAL STAYS</h4>
            </div>
            <div className='price-bonus-stays'>
              <h4>5,000.00</h4>
              <h4>1,823,500.84</h4>
            </div>
          </div>
        </div>

        {/* Step Three */}
        <div className='step-three-container'>
          <h3>STEP 3</h3>
          <h2>Make Payment</h2>
          <p>You can participate on the STAY Pre-CEX Listing Sale via Crypto, Card or Bank Transfer</p>
          <div className='make-payment'>
            <button className='crypto'>
              <img src={WalletCrypto} alt='Crypto' width={20} height={20}/> Crypto Payment
            </button>
            <span>OR</span>
            <button className='card'>
              <img src={Card} alt='Card'/>Card Payment
            </button>
          </div>
          <div className='powered-by'>
            <h4>Powered By</h4>
            <img src={Flooz} alt='Flooz'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepsGuide