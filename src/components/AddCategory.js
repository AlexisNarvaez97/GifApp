import React, { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('');

    const hadleInputChange = ( e ) => {
        setInputValue(e.target.value);
    }

    const hadleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={hadleSubmit}>
            <input type="text" value={ inputValue } onChange={ hadleInputChange } />
        </form>
    )
}
