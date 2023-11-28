import React from 'react'

const CardTitle = ({title, color}) => {
  return (
    <h4 className={`fw-bold ${color}`}>{title}</h4>
  )
}

export default CardTitle