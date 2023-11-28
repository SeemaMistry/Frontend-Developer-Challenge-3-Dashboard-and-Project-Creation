import React from 'react'
import Description from './Description'

const DropDownInput = ({dropDownOptions}) => {
    const {label, defaultSelected, options} = dropDownOptions
    const onChange = e => {console.log(e.target.value)}
    const textColor = 'text-secondary' 

  return (
    <div class='mb-3 mx-2'>
        <label for='selectOptions' class={`form-label ${textColor} fw-semibold`}>{label}</label>
        <select id='selectOptions' class={`form-select ${textColor} rounded-0`} onChange={onChange}>
            <option className='${textColor}' selected>{defaultSelected}</option>
            {options.map(option => <option className={`${textColor}`} value={option}>{option}</option>)}
        </select>
    </div>

  )
}

export default DropDownInput