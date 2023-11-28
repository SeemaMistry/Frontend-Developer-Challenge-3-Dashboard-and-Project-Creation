import React from 'react'
import Card from './Card'
import CardTitle from '../components/CardTitle'
import Description from './Description'
import RedirectButton from './RedirectButton'
import clipboardImg from '../assets/latest_achievement.png'
import iconYellowBadge from '../assets/iconYellowBadge.png'

const RowTwoCards = ({height}) => {
  const centerImage = 'mx-auto d-block'
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
        <div className='d-flex justify-content-start'>
          <img src={iconYellowBadge}/>
          <div className='my-auto'>
            <CardTitle title='Latest Achievement '/>
          </div>
        </div>
        <Description description='Complete challenges to gain badges and achievements. Get started now!'/>
        <img className={`${centerImage}`} src={clipboardImg} />
        <div className='d-flex justify-content-end' style={{marginTop: '10%'}}>
          <RedirectButton label='Explore more'/>
        </div>
      </Card>
    </div>
  </div> 
  )
}

export default RowTwoCards