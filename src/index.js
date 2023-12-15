import React from 'react';
import ReactDOM from 'react-dom/client';
// import cssText from 'bundle-text:./index.css';
import * as cssText from "./index.css"
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// inject <style> tag
let style = document.createElement('style');
style.textContent = cssText;
document.head.appendChild(style);

const widgetContainer = ReactDOM.createRoot(document.getElementById("survey-widget-container"))
widgetContainer.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

