import axios from 'axios';

import { baseURL } from '@/constant/env';

const axiosInstance = axios.create({
  baseURL: baseURL,
  // timeout: 5000, // timeout after 5 seconds
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers you need
  },
});

export default axiosInstance;
