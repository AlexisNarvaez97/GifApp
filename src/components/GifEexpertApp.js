import React, { useState } from 'react'

export const GifEexpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    const handleAdd = () => {
        // setCategories(['HunterXHunter', ...categories]);
        setCategories( cats => [...cats, 'HunterXHunter']);
    }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr/>

            <button onClick={ handleAdd }>Agregar Heroes</button>

            <ol>

                {
                    categories.map( category => {
                        return <li key={ category }> { category } </li>
                    })
                }

            </ol>


        </div>
    )
}
