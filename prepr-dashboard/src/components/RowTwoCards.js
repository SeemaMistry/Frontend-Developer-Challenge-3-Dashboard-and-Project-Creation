import React from 'react'
import Card from './Card'
import CardTitle from '../components/CardTitle'

const RowTwoCards = ({height}) => {
  return (
    <div className='row'>
    <div className='col-md-8'>
      <Card height={height}>
        <span>Leader Board</span>
      </Card>
    </div>
    <div className='col'>
      <Card height={height}>
      <CardTitle title='Card title will be here'/>
      </Card>
    </div>
  </div> 
  )
}

export default RowTwoCards