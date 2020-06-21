import React, { useEffect } from 'react'

export const GifGrid = ( { category }) => {

    useEffect( () => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=porn&limit=10&api_key=vu1XnlfNH8RXUmxg7yoNyH89kRi6ftEc';

        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
        console.log(gifs);
    }

    // getGifs();


    return (
        <div>
            <h3> { category } </h3>
        </div>
    )
}
