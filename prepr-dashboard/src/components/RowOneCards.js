import React, {useState} from 'react'
import Card from './Card'
import CardTitle from '../components/CardTitle'
import RedirectButton from './RedirectButton'
import Description from './Description'

import progressImg from '../assets/myProgressAsset.png'
import clipboardImg from '../assets/latest_achievement.png'

const RowOneCards = ({height}) => {
  // Card #3 hover over effect
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
     setIsHover(true);
  };
  const handleMouseLeave = () => {
     setIsHover(false);
  };
  const boxStyle = {backgroundColor: isHover ? 'lightgrey' : ''}

  // store repeated styles 
  const myProgressBtnClasses = 'btn btn-outline-secondary text-success rounded-0'
  const centerImage = 'mx-auto d-block'
  return (
    <div className='row'>
    <div className='col-md-4'>
      <Card height={height}>
        <div className='d-flex justify-content-between'>
          <CardTitle title='My Progress'/>
          <div className='shadow-sm'>
            <button className={`${myProgressBtnClasses}`} disabled>Challenges</button>
            <button className={`${myProgressBtnClasses}`} disabled>Labs</button>
            <button className={`${myProgressBtnClasses}`} disabled>Resources</button>
          </div>
        </div>
        <Description description='You joined Preprlabs on Nov 13, 2023, here is your Challenge journey. '/>
        <img className={`img-thumbnail ${centerImage}`} src={progressImg} alt='progress image'/>
      </Card>
    </div>
    <div className='col-md-4'>
      <Card height={height}>
        <CardTitle title='Continue Where You Left Off'/>
        <Description description='We found you have not started any Challenges at this time. Start a new Challenge today!'/>
        <img className={`${centerImage}`} src={clipboardImg} />
        <div className='d-flex justify-content-end' style={{marginTop: '10%'}}>
          <RedirectButton label='Continue'/>
        </div>
        
      </Card>
    </div>
    <div className='col-md-4'>
      <Card height={height}>
        <CardTitle title='Upcoming Challenge Deadlines'/>
        <div 
          className='mx-3 d-flex justify-content-between'
          style={boxStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div><i class="bi bi-calendar3 fs-1 p-2"></i></div>
          <div className='mx-3 w-100'>
            <p>
              <span className='fw-bold'>Frontend Developer Challenge 1: Web Page Creation</span><br></br>
              <span className='text-secondary'>Due November 21 at 5:47PM</span>
            </p>
          </div>
        </div>
        <hr></hr>
      </Card>
    </div>
  </div> 
  )
}

export default RowOneCards