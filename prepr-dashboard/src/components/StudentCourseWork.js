import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import CardTitle from './CardTitle'
import RedirectButton from './RedirectButton'
import Description from './Description'
import labIcon from '../assets/lab_icon.svg'
import challengeIcon from '../assets/challenge_icon.svg'
import projectIcon from '../assets/project_icon.svg'

const StudentCourseWork = ({boxContent}) => {
    // const [projectExists, setProjectExists] = useState(false)
    const {isButton, buttonUrl, categoryTitle, tabs} = boxContent // destructure prop
    const icon = categoryTitle === 'Labs' ? labIcon : 
        categoryTitle === 'Challenges' ? challengeIcon : projectIcon

    // handle tab onClick events to render corresponding tab-content
    const [tabContent, setTabContent] = useState(tabs[0].tabContent)
    
    const onTabContentHandler = (tabID) => {
        // use tabID to set the tab content
        setTabContent(tabs.filter(tab => tab.id === tabID)[0].tabContent)
    }

  return (
    <div>
        {/* heading */}
        <div className='d-flex justify-content-between'>
            <div className='d-flex justify-content-start'>
                <img src={icon}/>
                <div className='my-auto mx-2'>
                <CardTitle title={categoryTitle} color='text-success'/>
                </div>
            </div>
            {isButton ? 
                <div className=''>
                    <RedirectButton label=''>
                        <Link style={{textDecoration: 'none', color: 'white'}} to={buttonUrl}>Create +</Link>
                    </RedirectButton>
                </div> 
                : <></>
            }
        </div>

        {/* buttons + content */}
        <div className='d-flex justify-content-evenly mt-2'>
            {tabs.map(tab => 
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
            <Description description={tabContent}/>
            {/* {tabContent === '' && <Description description='No projects found.'/>}
            {/* {tabContent !== '' && <div>we have some states to render {tabs[0].tabContent[0].id}</div>} */}
            {/* {tabContent && tabs[0].tabContent.map(p => <ProjectInfo title={p.title} description={p.description} activeChallenge={p.activeChallenge} imgURL={p.imgURL}/>)} */}
            {/* {projectExists ? renderProjectComponent : <Description description='No projects found.'/>} */}
        </div>
        <div className='text-center p-2 bg-light rounded-top-0 rounded-4'>
           <p className='pt-3'> <RedirectButton label='Explore more'/></p>
        </div>
    </div>
  )
}

export default StudentCourseWork