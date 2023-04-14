import { useState } from "react";
import {postItem } from "./api";



const SellForm = ({setItems}) => {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [img, setImg] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(itemCategory)
    console.log("Item listed on Bargain Bay");
    const newItem = {
      item_name: itemName,
      img_url: img,
      description: itemDescription,
      category_name: itemCategory,
      price: itemPrice
    };
    postItem(newItem).then((addItem) => {
      setItems((newListItem) => {
        return [addItem, ...newListItem];
      });
    });
  };

  return (
    <main className="sell">
      <h2>List an item for sale</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="item-name">Item Name:</label>
        <input
          type="text"
          id="item-name"
          name="item-name"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
          required
        />
        <label htmlFor="item-name">Image URL:</label>
        <input
          type="url"
          id="img_url"
          name="img_url"
          value={img}
          onChange={(event) => setImg(event.target.value)}
          required
        />

        <label htmlFor="item-description">Item Description:</label>
        <textarea
          id="item-description"
          name="item-description"
          value={itemDescription}
          onChange={(event) => setItemDescription(event.target.value)}
          required
        ></textarea>

        <label htmlFor="item-category">Item Category:</label>
        <select
          id="item-category"
          name="item-category"
          value={itemCategory}
          onChange={(event) => setItemCategory(event.target.value)}
          required
        >
          <option value="">-- Select a category --</option>
          <option value="Electronics">Electronics</option>
          <option value="Household">Household</option>
          <option value="Relics">Relics</option>
        </select>
›
        <label htmlFor="item-price">Item Price:</label>
        <input
          type="number"
          id="item-price"
          name="item-price"
          value={itemPrice}
          onChange={(event) => setItemPrice(event.target.value)}
          required
        />

        <button type="submit">List Item</button>
      </form>
    </main>
  );
};

export default SellForm;
