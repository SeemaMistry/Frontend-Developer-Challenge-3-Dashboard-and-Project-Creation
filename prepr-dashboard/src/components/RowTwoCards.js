import React from 'react'
import Card from './Card'
import CardTitle from '../components/CardTitle'
import Description from './Description'
import RedirectButton from './RedirectButton'
import clipboardImg from '../assets/latest_achievement.png'
import iconYellowBadge from '../assets/iconYellowBadge.png'
import DropDownInput from './DropDownInput'
import {organizationList, labsList, challengesList, sortByList} from './DropDownDummyData'

const RowTwoCards = ({height}) => {
  const centerImage = 'mx-auto d-block'
  const onChange = e => {} // filters in Leaderboard do nothing on change
  
  return (
    <div className='row'>
    <div className='col-md-8'>
      <Card height={height}>
        <div className='d-flex justify-content-between'>
          <CardTitle title='Leaderboard' color='text-success'/>
          <RedirectButton label='View Leaderboard'/>
        </div>
        <div className='d-sm-flex justify-content-between'>
          <DropDownInput dropDownOptions={organizationList} nameString='dummyString' onSetFormInput={onChange}/>
          <DropDownInput dropDownOptions={labsList} nameString='dummyString' onSetFormInput={onChange}/>
          <DropDownInput dropDownOptions={challengesList} nameString='dummyString' onSetFormInput={onChange}/>
          <DropDownInput dropDownOptions={sortByList} nameString='dummyString' onSetFormInput={onChange}/>
          <a className='text-center my-auto'>Clear Filters</a>
        </div>
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