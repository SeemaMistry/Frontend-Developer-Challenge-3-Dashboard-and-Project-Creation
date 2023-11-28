import React from 'react'

const RedirectButton = ({label, children}) => {
  return (
    <button className='btn btn-success btn-sm'>{label} {children}</button>
  )
}

export default RedirectButton