import React from 'react'

const RedirectButton = ({label, size, children}) => {
  const btnSize = size === null ? 'btn-sm' : size
  return (
    <button className={`btn btn-success ${btnSize}`}>{label} {children}</button>
  )
}

export default RedirectButton