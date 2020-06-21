import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifEexpertApp = () => {
  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

  const [categories, setCategories] = useState(["One Punch"]);

  // const handleAdd = () => {
  //     // setCategories(['HunterXHunter', ...categories]);
  //     setCategories( cats => [...cats, 'HunterXHunter']);
  // }

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {/* <button onClick={ handleAdd }>Agregar Heroes</button> */}

      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </div>
  );
};
