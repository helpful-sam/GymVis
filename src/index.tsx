import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/searchbar.css';
import './css/model.css';
import './css/activeExercise.css';
import App from './components/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
