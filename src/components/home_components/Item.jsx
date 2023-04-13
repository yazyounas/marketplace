import { useState, useEffect } from "react";

function Item({ selectedCategory }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://nc-marketplace-sem-3.onrender.com/api/items")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data.items);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const filteredItems = selectedCategory
    ? items.filter((item) => item.category_name === selectedCategory)
    : items;

  return (
    <div className="item-grid-container">
      
      <ul className="item-grid">
        {filteredItems.map((item) => (
          <li key={item.item_id} className="item-box">
            <h3>{item.item_name}</h3>
            <p>{item.description}</p>
            <img src={item.img_url} alt={item.item_name} className="item-img"/>
            <p>Price: ${item.price}</p>
            <p>Category: {item.category_name}</p>
            <button className="button">Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Item;
