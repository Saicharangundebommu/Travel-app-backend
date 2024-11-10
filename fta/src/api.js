import axios from 'axios';

const API = axios.create({ baseURL: 'https://travel-app-backend-3prh.onrender.com/api' });

export const createTrip = (tripData) => API.post('/trips', tripData);
