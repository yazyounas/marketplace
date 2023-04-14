import axios from "axios";

const marketplaceAPI = axios.create({
    baseURL: 'https://nc-marketplace-sem-3.onrender.com/api'
});

export const postItem = (item) => {
    console.log(item)
    return marketplaceAPI.post('/items', item)
  
      .then(({data}) => {
       
        return data.item;
      })
      .catch((error) => {
        console.error('Error creating item:', error);
        throw error;
      });
  };
  
  
  
  
  
  
  