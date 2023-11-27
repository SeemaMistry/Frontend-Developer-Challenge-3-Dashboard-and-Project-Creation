import React from 'react'
import Card from './Card'
import CardTitle from '../components/CardTitle'

const RowOneCards = ({height}) => {
  return (
    <div className='row'>
    <div className='col-md-4'>
      <Card height={height}>
        <CardTitle title='Card title will be here'/>
      </Card>
    </div>
    <div className='col-md-4'>
      <Card height={height}>
        <CardTitle title='Card title will be here'/>
      </Card>
    </div>
    <div className='col-md-4'>
      <Card height={height}>
        <CardTitle title='Card title will be here'/>
      </Card>
    </div>
  </div> 
  )
}

export default RowOneCards