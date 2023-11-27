import React from 'react'
import RowOneCards from '../components/RowOneCards'
import RowTwoCards from '../components/RowTwoCards'
import RowThreeCards from '../components/RowThreeCards'

const Dashboard = () => {
  return (
    <div className='container-fluid my-3 mx-3'>
      <div className=''>
        <h2>Welcome, Seema. <a className='link-success fs-5' href='#!'>Complete profile</a></h2>
      </div>
      <div className='bg-white p-4' style={{height: '100%'}}>
        <RowOneCards height='18rem'/>
        <RowTwoCards height='16rem'/>
        <RowThreeCards height='24rem'/>
      </div>
    </div>

  )
}

export default Dashboard