import React from 'react'
import Card from './Card'
import CardTitle from '../components/CardTitle'
import RedirectButton from './RedirectButton'

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
        <RedirectButton label='Continue'/>
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