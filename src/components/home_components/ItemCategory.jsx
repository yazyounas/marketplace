import { useState, useEffect } from "react";
import Item from "./Item";

function ItemCategory({items,setItems}) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);


  useEffect(() => {
    setIsLoading(true);
    fetch("https://nc-marketplace-sem-3.onrender.com/api/categories")
      .then((response) => response.json())
      .then((data) => {
        
        setCategories(data.categories);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="item-list-container">
      <h2 className="category-title">Categories</h2>
      <select className="category-dropdown" onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category.category_name} value={category.category_name}>
            {category.category_name}
          </option>
        ))}
      </select>
      
      
 <Item items={items} setItems={setItems} selectedCategory={selectedCategory || null} />
    
    </div>
  );
}

export default ItemCategory;
