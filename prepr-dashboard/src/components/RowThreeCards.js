import React from 'react'
import Card from './Card'
import StudentCourseWork from './StudentCourseWork'
import {DUMMY_DATA} from './DummyData'

const RowThreeCards = ({height}) => {
  return (
    <div className='row'>
      {/* map each student-work-box content for labs, challenges, projects */}
      {DUMMY_DATA.map(courseWorkBox => 
        <div className='col-md-4'>
          <Card height={height}>
            <StudentCourseWork boxContent={courseWorkBox}/>
          </Card>
        </div>
      )}
  </div> 
  )
}

export default RowThreeCards