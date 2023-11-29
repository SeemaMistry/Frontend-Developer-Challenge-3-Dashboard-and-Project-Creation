import React from 'react'
import {connect} from 'react-redux'
import RowOneCards from '../components/RowOneCards'
import RowTwoCards from '../components/RowTwoCards'
import RowThreeCards from '../components/RowThreeCards'

const Dashboard = ({projects}) => {
  return (
    <div className='container-fluid'>
      <div className='mb-4 mt-2'>
        <h3 className='fw-semibold'>Welcome, Seema. <a className='fw-normal link-success fs-5' href='#!'>Complete profile</a></h3>
      </div>
      <div className='bg-white p-4' style={{height: '100%'}}>
        <RowOneCards height='27rem'/>
        <RowTwoCards height='27rem'/>
        <RowThreeCards height='25rem' state={projects}/>
      </div>

    </div>

  )
}

const mapStateToProps = state => ({
  projects: state
})

export default connect(mapStateToProps, null)(Dashboard)