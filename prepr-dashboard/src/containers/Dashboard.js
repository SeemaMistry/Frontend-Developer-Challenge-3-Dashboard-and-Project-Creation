import React from 'react'
import Card from '../components/Card'

const Dashboard = () => {
  return (
    <div className='container-fluid my-3 mx-3'>
      <div className=''>
        <h2>Welcome, Seema. <a className='link-success fs-5' href='#!'>Complete profile</a></h2>
      </div>
      <div className='bg-white p-4' style={{height: '100%'}}>

        {/* row 1 */}
        <div className='row'>
          <div className='col-md-4'>
            <Card>
              <h2>Edit Info</h2>
            </Card>
          </div>
          <div className='col-md-4'>
            <Card>
              <h2>Edit Info</h2>
            </Card>
          </div>
          <div className='col-md-4'>
            <Card>
              <h2>Edit Info</h2>
            </Card>
          </div>
        </div> 

        {/* row 2 */}
        <div className='row'>
          <div className='col-md-8'>
            <Card>
              <h2>Edit Info</h2>
            </Card>
          </div>
          <div className='col'>
            <Card>
              <h2>Edit Info</h2>
            </Card>
          </div>
        </div> 

        {/* row 3 */}
        <div className='row'>
          <div className='col-md-4'>
            <Card>
              <h2>Edit Info</h2>
            </Card>
          </div>
          <div className='col-md-4'>
            <Card>
              <h2>Edit Info</h2>
            </Card>
          </div>
          <div className='col-md-4'>
            <Card>
              <h2>Edit Info</h2>
            </Card>
          </div>
        </div> 
        
      </div>
    </div>

  )
}

export default Dashboard