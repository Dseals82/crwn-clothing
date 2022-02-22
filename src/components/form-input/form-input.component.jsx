import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...restOfFormInputProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...restOfFormInputProps}/>
        {
            label ? 
            (
            <label className={`${restOfFormInputProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>
            ) : null
        }
    </div>
)

export default FormInput;