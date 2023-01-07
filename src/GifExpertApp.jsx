import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Naruto"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]); // primera forma de insertar datos en arreglos
    // setCategories((cat) => [...cat, "Naruto"]); // segunda forma con callback
  };
  return (
    <>
      <h1>Gif expert app</h1>
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
