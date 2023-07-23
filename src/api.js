import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com'; // Replace with your API URL

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
