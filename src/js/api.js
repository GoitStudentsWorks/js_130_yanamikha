import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wedding-photographer.b.goit.study/api',
});

api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);

    return Promise.reject(error);
  }
);

export async function getCategories() {
  const response = await api.get('/categories');
  return response.data;
}

export async function getPhotos(params) {
  const response = await api.get('/wedding-photos', { params });
  return response.data;
}

export async function getFeedbacks(order) {
  const response = await api.get('/feedbacks', {
    params: order ? { order } : {},
  });

  return response.data;
}

export async function createOrder(orderData) {
  const response = await api.post('/order', orderData);
  return response.data;
}
