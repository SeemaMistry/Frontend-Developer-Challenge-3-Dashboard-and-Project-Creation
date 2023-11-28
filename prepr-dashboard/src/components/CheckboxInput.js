import React from 'react'

const CheckboxInput = ({label}) => {
  return (
    <div class="form-check text-secondary">
        <input class="form-check-input" type="checkbox" value="" id={label}/>
        <label class="form-check-label" for="defaultCheck1">
            {label}
        </label>
    </div>

  )
}

export default CheckboxInput