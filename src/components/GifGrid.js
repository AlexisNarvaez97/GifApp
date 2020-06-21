import React, { useEffect, useState } from "react";
import { GridItem } from "./GridItem";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then ( imgs => setImages(imgs));
  }, [ category ]);

  return (
    <>
      <h3> {category} </h3>
      <div className="card-grid">
        {images.map((img) => (
          <GridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
