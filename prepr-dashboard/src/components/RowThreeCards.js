import React, {useState} from 'react'
import Card from './Card'
import {Link} from 'react-router-dom'
import CardTitle from './CardTitle'
import RedirectButton from './RedirectButton'
import StudentCourseWork from './StudentCourseWork'
import Description from './Description'
import {DUMMY_DATA} from './DummyData'
import ProjectInfo from './ProjectInfo'
import projectIcon from '../assets/project_icon.svg'
import testImg1 from '../assets/image.png'
import testImg2 from '../assets/Untitled.png'
import testImg3 from '../assets/basic-bar-graph.png'


const RowThreeCards = ({height, state}) => {

  const projectsBox = {
    isButton: true,
    buttonUrl: '/create/project',
    categoryTitle: 'Projects',
    tabs: [
        {id:'projects-tab1', tabTitle: 'My Projects', tabContent: state.project},
        {id:'projects-tab2', tabTitle: 'Need to assess', tabContent: 'No projects to assess.'},
        {id:'projects-tab3', tabTitle: 'Invited', tabContent: 'No pending Project invitations.'}
    ]
}
const icon = projectIcon
// handle tab onClick events to render corresponding tab-content
const [tabContent, setTabContent] = useState(projectsBox.tabs[0].tabContent)

const onTabContentHandler = (tabID) => {
    // use tabID to set the tab content
    setTabContent(projectsBox.tabs.filter(tab => tab.id === tabID)[0].tabContent)
}


let renderProjectComponent = ''
if (projectsBox.tabs[0].tabContent.length > 0) {  
  const projectsStateList = projectsBox.tabs[0].tabContent
  const x = projectsStateList[0]
  const selectedImg = x.imgURL === 'image.png' ? testImg1 : x.imgURL === 'Untitled.png' ? testImg2 : testImg3
  renderProjectComponent = <ProjectInfo title={x.title} description={x.description} activeChallenge={x.activeChallenge} imgURL={selectedImg}/>
}
  return (
    <div className='row'>
      {/* map each student-work-box content for labs, challenges */}
      {DUMMY_DATA.map(courseWorkBox => 
        <div className='col-md-4'>
          <Card height={height}>
            <StudentCourseWork boxContent={courseWorkBox}/>
          </Card>
        </div>
      )}
        <div  className='col-md-4'>
        <Card height={height}>
        {/* heading */}
        <div className='d-flex justify-content-between'>
            <div className='d-flex justify-content-start'>
                <img src={icon}/>
                <div className='my-auto mx-2'>
                <CardTitle title={projectsBox.categoryTitle} color='text-success'/>
                </div>
            </div>
            {projectsBox.isButton ? 
                <div className=''>
                    <RedirectButton label=''>
                        <Link style={{textDecoration: 'none', color: 'white'}} to={projectsBox.buttonUrl}>Create +</Link>
                    </RedirectButton>
                </div> 
                : <></>
            }
        </div>

        {/* buttons + content */}
        <div className='d-flex justify-content-evenly mt-2'>
            {projectsBox.tabs.map(tab => 
                <button 
                    key={tab.id}
                    id={tab.id} 
                    className='btn btn-outline-success rounded-bottom-0 w-100'
                    onClick={id => onTabContentHandler(tab.id)}
                >
                    {tab.tabTitle}
                </button> 
            )}
            
        </div>
        <div className='text-center mt-3' style={{height: '100px'}}>
          {renderProjectComponent === '' ? <Description description={tabContent}/> : renderProjectComponent}  
        </div>
        <div className='text-center p-2 bg-light rounded-top-0 rounded-4'>
           <p className='pt-3'> <RedirectButton label='Explore more'/></p>
        </div>
        </Card>
    </div>
    

  </div> 
  )
}

export default RowThreeCards