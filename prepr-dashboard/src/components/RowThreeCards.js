import React from 'react'
import Card from './Card'
import CardTitle from '../components/CardTitle'
import RedirectButton from './RedirectButton'

const RowThreeCards = ({height}) => {
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
        <RedirectButton label='Create'/>
      </Card>
    </div>
  </div> 
  )
}

export default RowThreeCards