import React from 'react'

export const GridItem = ( { id, title, url} ) => {
    return (
        <div>
           <img src={url} alt={title} />
           <p> { title } </p>
        </div>
    )
}
