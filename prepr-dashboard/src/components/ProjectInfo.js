import React from 'react'

const ProjectInfo = ({title, imgURL, description, activeChallenge}) => {
  return (
    <div className='mx-3 d-flex justify-content-between'>
        <div>
            <img src={imgURL} style={{width: '90px', height: '90px'}} alt=''/>
        </div>
        <div className='mx-3 w-100'>
        <p>
            <span className='fw-bold'>{title}</span><br></br>
            <span className='fw-bold'>{activeChallenge}</span><br></br>
            <span className='text-secondary'>{description}</span>
        </p>
        </div>
        <hr></hr>
    </div>       
  )
}

export default ProjectInfo