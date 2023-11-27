import React from 'react'
import Card from './Card'
import CardTitle from '../components/CardTitle'
import RedirectButton from './RedirectButton'

const RowTwoCards = ({height}) => {
  return (
    <div className='row'>
    <div className='col-md-8'>
      <Card height={height}>
        <span>Leader Board</span>
        <RedirectButton label='View Leaderboard'/>
      </Card>
    </div>
    <div className='col'>
      <Card height={height}>
        <CardTitle title='Card title will be here'/>
        <RedirectButton label='Explore more'/>
      </Card>
    </div>
  </div> 
  )
}

export default RowTwoCards