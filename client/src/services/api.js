import axios from 'axios';

/**
 * Centralized Axios instance configured for API requests.
 * Uses withCredentials so HTTP-only JWT cookies are sent automatically.
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor (for headers or logging if needed)
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for unified error extraction
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const customError = {
      status: error.response?.status || 500,
      message: error.response?.data?.message || error.message || 'Something went wrong',
      data: error.response?.data || null,
    };
    return Promise.reject(customError);
  }
);

export default api;
