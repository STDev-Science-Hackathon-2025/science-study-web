import axios from 'axios';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './index.css';

axios.defaults.baseURL = 'http://ec2-3-37-16-161.ap-northeast-2.compute.amazonaws.com:8080/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
