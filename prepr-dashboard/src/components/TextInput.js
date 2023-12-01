import React from 'react'

const TextInput = ({onSetFormInput, label, value, name, placeholder, isRequired}) => {
    const onChange = e => {
        onSetFormInput(e.target.name, e.target.value)
    }
  return (
    <div className='form-group'>
      <label className='form-label mt-3 text-secondary'>{label}:</label>
      <input
        className='form-control'
        type='text'
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        required={isRequired}
      />
    </div>
  )
}

export default TextInput