import React, {useState} from 'react'
import {Link, Navigate} from 'react-router-dom'
import {connect} from 'react-redux'
import { create_project } from '../actions/project'
import Description from '../components/Description'
import Card from '../components/Card'
import CardTitle from '../components/CardTitle'
import RedirectButton from '../components/RedirectButton'
import TextInput from '../components/TextInput'
import DropDownInput from '../components/DropDownInput'
import CheckboxInput from '../components/CheckboxInput'
import UploadImage from '../components/UploadImage'
import { recruitingStatusList, requiredSkillsList, activeChallengesList, associatedLabsList } from '../components/DropDownDummyData'

const CreateProject = ({create_project}) => {
  // retireve project data to save for dashboard display
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    activeChallenge: '',
    imgURL: ''
  })
  const [isDataValid, setIsDataValid] = useState(false)
  const {title, description, activeChallenge, imgURL} = formData // destructure formData
  
  // set formData values to state
  const onSetFormInput = (formName, formValue) => setFormData({...formData, [formName]: formValue})
  const onSaveImageUrl = imageURL => setFormData({...formData, imgURL: imageURL})

  const onSubmit = e => {
    e.preventDefault()
    // validate data 
    if (title !== '' && description !== '' && activeChallenge !== '' && imgURL !== '') {
      setIsDataValid(true)
      const id = Math.random()
      create_project(id, title, description, activeChallenge, imgURL)
    }
  }

  return (
    <div className='container mt-4 bg-white p-4'>
      {isDataValid && <Navigate to='/dashboard' />}
      {/* heading */}
      <CardTitle title='CREATE PROJECT' color='text-secondary'/>
      <hr></hr>

      <form onSubmit={onSubmit}>

        {/* project overview box */}
        <Card>
          <CardTitle title='Project Overview'/>
          <div className='row'>
          <div className='col-md-6'>
            <TextInput onSetFormInput={onSetFormInput} label='Title' value={title} name='title' placeholder='Max. 150 Characters' isRequired={true}/>
            <TextInput onSetFormInput={onSetFormInput} label='Description' value={description} name='description' placeholder='Max. 300 Characters' isRequired={true}/>
            <CheckboxInput label='Allow users outside your team to view your project'/>
            <CheckboxInput label='Allow users outside your team to download your project files' />
          </div>
          <div className='col-md-6'> 
          <TextInput onSetFormInput={onSetFormInput} label='Project Slug' name='Project Slug' placeholder='Project slug' isRequired={true}/>
            <DropDownInput dropDownOptions={activeChallengesList} nameString='activeChallenge' onSetFormInput={onSetFormInput}/>
            <DropDownInput dropDownOptions={associatedLabsList} nameString='labslist' onSetFormInput={onSetFormInput}/>
          </div>
          </div>
        </Card>

        {/* upload banner image box */}
        <Card height='36rem'>
          <CardTitle title='Upload Project Banner'/>
          <Description description='Please select png, jpg or jpeg image with minimum dimension of width: 625px, height: 355px'/>
          <UploadImage onSaveImageUrl={imgurl => onSaveImageUrl(imgurl)}/>
        </Card>

        {/* build your team box */}
        <Card>
          <CardTitle title='Build Your Team'/>
          <Description description='Building a team is important for your project.'/>
          <div className='row'>
            <div className='col-md-6'>
              <DropDownInput dropDownOptions={recruitingStatusList} nameString='recruitingStatus' onSetFormInput={onSetFormInput}/>
              <CheckboxInput label='Create project team chat' />
            </div>
            <div className='col-md-6'>
              <DropDownInput dropDownOptions={requiredSkillsList} nameString='requiredSkills' onSetFormInput={onSetFormInput}/>
            </div>
          </div>
        </Card>
        
        {/* cancel and submit buttons */}
        <div className='d-flex justify-content-evenly'>
          <RedirectButton label='' size='btn-lg'>
              <Link style={{textDecoration: 'none', color: 'white'}} to='/dashboard'>Cancel</Link>
          </RedirectButton>
        <button className='btn btn-success btn-lg mt-3' type='submit'>Create Project</button>
        </div>
      </form>  
      <div className='my-5'></div>
    </div>
  )
}

const mapStateToProps = state => ({
  projects: state
})

export default connect(mapStateToProps, {create_project})(CreateProject)