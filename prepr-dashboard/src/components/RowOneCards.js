import React from 'react'
import Card from './Card'

const RowOneCards = ({height}) => {
  return (
    <div className='row'>
    <div className='col-md-4'>
      <Card height={height}>
        <h2>Edit Info</h2>
      </Card>
    </div>
    <div className='col-md-4'>
      <Card height={height}>
        <h2>Edit Info</h2>
      </Card>
    </div>
    <div className='col-md-4'>
      <Card height={height}>
        <h2>Edit Info</h2>
      </Card>
    </div>
  </div> 
  )
}

export default RowOneCards