import React from 'react'
import './tokenomics.css'
import ChartImage from '../../assets/tokenomics.svg'
import Chart2 from '../../assets/chart1.svg'

const Tokenomics = () => {
  return (
    <div className='tokenomics-container'>
      <div className='tokenomics-main-container'>
        <h2>Tokenomics</h2>
        <div className='tokenomics'>
          {/* Chart */}
          <img src={ChartImage} alt='ChartImage' width={675} className='chart1'/>
          {/* Content */}
          <div className='boxes-container'>
            <div className='box-container'>
              <div className='box-content'>
                <h3>Pre-CEX Token Sale</h3>
                <h4>65%</h4>
              </div>
              <div className='box-content'>
                <h3>Liquidity</h3>
                <h4>15%</h4>
              </div>
              <div className='box-content'>
                <h3>Advisors & Partnerships</h3>
                <h4>10%</h4>
              </div>
              <div className='box-content'>
                <h3>Airdrop Campaing</h3>
                <h4>10%</h4>
              </div>
              <div className='box-content'>
                <h3>Team</h3>
                <h4>0%</h4>
              </div>
            </div>
            <div className='box-container'>
              <div className='box-content'>
                <h3>Funds Allocation</h3>
                <h4>100%</h4>
              </div>
              <div className='box-content'>
                <h3>Marketing & Development</h3>
                <h4>-</h4>
              </div>
              <div className='box-content'>
                <h3>CEX Listings</h3>
                <h4>-</h4>
              </div>
              <div className='box-content'>
                <h3>Liquidity</h3>
                <h4>-</h4>
              </div>
            </div>
          </div>
        </div>
        <img src={Chart2} alt='chart' className='chart2' />
      </div>
    </div>
  )
}

export default Tokenomics