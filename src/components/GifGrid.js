import React, { useEffect, useState } from "react";
import { GridItem } from "./GridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=porn&limit=10&api_key=vu1XnlfNH8RXUmxg7yoNyH89kRi6ftEc";

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    console.log(gifs);
    setImages(gifs);
  };

  // getGifs();

  return (
    <div>
      <h3> {category} </h3>
        {images.map( img => (
          <GridItem key={img.id} {...img} />
        ))}
    </div>
  );
};
