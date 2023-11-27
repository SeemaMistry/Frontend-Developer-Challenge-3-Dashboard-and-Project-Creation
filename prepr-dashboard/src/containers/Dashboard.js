import React from 'react'
import RowOneCards from '../components/RowOneCards'
import RowTwoCards from '../components/RowTwoCards'
import RowThreeCards from '../components/RowThreeCards'

const Dashboard = () => {
  return (
    <div className='container-fluid'>
      <div className=''>
        <h2>Welcome, Seema. <a className='link-success fs-5' href='#!'>Complete profile</a></h2>
      </div>
      <div className='bg-white p-4' style={{height: '100%'}}>
        <RowOneCards height='25rem'/>
        <RowTwoCards height='20rem'/>
        <RowThreeCards height='40rem'/>
      </div>
    </div>

  )
}

export default Dashboard