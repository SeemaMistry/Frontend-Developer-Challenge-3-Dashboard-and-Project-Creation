import React from 'react'

const Card = ({children}) => {
  return (
    <div className='bg-white rounded shadow p-3 m-3'>
        {children}
    </div>
  )
}

export default Card