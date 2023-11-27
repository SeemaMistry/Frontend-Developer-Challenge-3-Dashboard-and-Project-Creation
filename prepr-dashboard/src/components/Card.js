import React from 'react'

const Card = ({children, height}) => {
    
  return (
    <div className='bg-white rounded shadow p-3 m-3' style={{height: `${height}`}}>
        {children}
    </div>
  )
}

export default Card