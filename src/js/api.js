import axios from 'axios';

const BASE_URL = 'https://wedding-photographer.b.goit.study/api';

export async function getCategories() {
  const response = await axios.get(`${BASE_URL}/categories`);
  return response.data;
}

export async function getPhotos(params) {
  const response = await axios.get(`${BASE_URL}/wedding-photos`, { params });
  return response.data;
}

export async function getFeedbacks(order) {
  const response = await axios.get(`${BASE_URL}/feedbacks`, {
    params: order ? { order } : {},
  });

  return response.data;
}

export async function createOrder(orderData) {
  const response = await axios.post(`${BASE_URL}/order`, orderData);
  return response.data;
}
