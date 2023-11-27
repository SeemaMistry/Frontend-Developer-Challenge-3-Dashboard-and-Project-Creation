import React from 'react'
import Card from './Card'

const RowTwoCards = ({height}) => {
  return (
    <div className='row'>
    <div className='col-md-8'>
      <Card height={height}>
        <h2>Edit Info</h2>
      </Card>
    </div>
    <div className='col'>
      <Card height={height}>
        <h2>Edit Info</h2>
      </Card>
    </div>
  </div> 
  )
}

export default RowTwoCards