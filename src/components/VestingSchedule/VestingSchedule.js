import React, { useState } from 'react';
import './vestingschedule.css'
import Allocation from '../../assets/allocation.svg'
import Locked from '../../assets/locked.svg'
import Unlocked from '../../assets/unlocked.svg'
import VestingScheduleChart from '../../assets/vesting-schedule.svg'

const VestingSchedule = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [viewAll, setViewAll] = useState(false);

  const transactions = [
    { wallet: 'Kianna Donin', txID: '0x6..C33', allocation: 5250, unlocked: 2125, claimed: 1000, unclaimed: 1125, locked: 1625 },
    { wallet: 'Miracle Kenter', txID: '0x6..C33', allocation: 5250, unlocked: 2125, claimed: 2125, unclaimed: 0, locked: 1625 },
    { wallet: 'Corey Bergson', txID: '0x6..C33', allocation: 5250, unlocked: 2125, claimed: 2125, unclaimed: 0, locked: 1625 },
    { wallet: 'Roger Botosh', txID: '0x6..C33', allocation: 5250, unlocked: 2125, claimed: 2125, unclaimed: 0, locked: 1625 },
    { wallet: 'Zaire Calzoni', txID: '0x6..C33', allocation: 5250, unlocked: 2125, claimed: 2125, unclaimed: 0, locked: 1625 },
    { wallet: 'John Doe', txID: '0x6..C33', allocation: 5250, unlocked: 2125, claimed: 2125, unclaimed: 0, locked: 1625 },
    { wallet: 'Jane Smith', txID: '0x6..C33', allocation: 5250, unlocked: 2125, claimed: 2125, unclaimed: 0, locked: 1625 },
    { wallet: 'Alan Smithee', txID: '0x6..C33', allocation: 5250, unlocked: 2125, claimed: 2125, unclaimed: 0, locked: 1625 },
    { wallet: 'Ada Lovelace', txID: '0x6..C33', allocation: 5250, unlocked: 2125, claimed: 2125, unclaimed: 0, locked: 1625 },
    { wallet: 'Grace Hopper', txID: '0x6..C33', allocation: 5250, unlocked: 2125, claimed: 2125, unclaimed: 0, locked: 1625 },
    { wallet: 'Grace Hopper', txID: '0x6..C33', allocation: 5250, unlocked: 2125, claimed: 2125, unclaimed: 0, locked: 1625 },
    // Add more entries as needed
  ];


  const handleViewAll = () => {
    setViewAll(!viewAll);
    setCurrentPage(1);
    setItemsPerPage(viewAll ? 5 : transactions.length);
  };

  const currentTransactions = transactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  return (
    <div className='vesting-token-transactions'>
    <div className='vesting-main-container'>
      <div className='vesting-token'>
        {/* Vesting Schedule */}
        <div className='vesting-schedule'>
          <h2>Vesting Schedule</h2>
          <p>Withdraw your $STAY token from this vesting schedule</p>
          <img src={VestingScheduleChart} alt='chart' style={{ marginTop: '22px' }} className='vesting-schedule-chart' />

          {/* Transactions */}
          <div className='transactions-container'>
            <h2>Transactions</h2>
            <div className="transaction-table">
              <table>
                <thead>
                  <tr>
                    <th>Wallet</th>
                    <th>Tx ID</th>
                    <th>Allocation</th>
                    <th>Unlocked</th>
                    <th>Claimed</th>
                    <th>Unclaimed</th>
                    <th>Locked</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {currentTransactions.map((tx, index) => (
                    <tr key={index}>
                      <td>{tx.wallet}</td>
                      <td>{tx.txID}</td>
                      <td>{tx.allocation.toLocaleString()}</td>
                      <td>{tx.unlocked.toLocaleString()}</td>
                      <td>{tx.claimed.toLocaleString()}</td>
                      <td>{tx.unclaimed.toLocaleString()}</td>
                      <td>{tx.locked.toLocaleString()}</td>
                      <td><button className="claim-button">Claim</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pagination">
                <h3>Showing <span>{((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, transactions.length)}</span> of {transactions.length} entities</h3>
                <button className='view-entities' onClick={handleViewAll}>{viewAll ? 'Show Less' : 'View All'}</button>
              </div>
            </div>
          </div>
        </div>
        {/* Token Summary */}
        <div className='token-summary'>
          <h2>Token Summary</h2>
          <div className='allocation'>
            <img src={Allocation} alt='Allocation' width={50} height={50} />
            <div className='allocation-content'>
              <h4>Allocation</h4>
              <h2>10,000 <span>STAYs</span></h2>
            </div>
          </div>
          <div className='locks-container'>
            {/* Locked & Unlocked */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className='locks'>
                <div >
                  <img src={Locked} alt='Locked' />
                  <h3>Locked</h3>
                </div>
                <h1>3,806 <span>STAYS</span></h1>
              </div>
              <div className='locks'>
                <div>
                  <img src={Unlocked} alt='Locked' />
                  <h3>Unlocked</h3>
                </div>
                <h1>3,806 <span>STAYS</span></h1>
              </div>
            </div>

            {/* Claimed & Unclaimed */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className='locks'>
                <div >
                  <img src={Locked} alt='Locked' />
                  <h3 >Claimed</h3>
                </div>
                <h3 className='claim'>Friday, Aug 12, 2022, 4:00 (GST)</h3>
              </div>
              <div className='locks'>
                <div>
                  <img src={Locked} alt='Locked' />
                  <h3 >Unclaimed</h3>
                </div>
                <h3 className='claim'>Monday, Aug 12, 2026, 4:00 (GST)</h3>
              </div>
            </div>

            {/* Next Unlock & Total Unlock */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className='next-total'>
                <div>
                  <img src={Locked} alt='Locked' />
                  <h3>Next Unlock</h3>
                </div>
                <h3>1 year/1,625 Rocks</h3>
              </div>
              <div className='next-total'>
                <div>
                  <img src={Locked} alt='Locked' />
                  <h3>Total Unlock</h3>
                </div>
                <h3>4,875/Week</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default VestingSchedule