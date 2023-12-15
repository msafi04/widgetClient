import React from 'react';
import ReactDOM from 'react-dom';
// import cssText from 'bundle-text:./index.css';
import * as cssText from "./index.css"
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// inject <style> tag
let style = document.createElement('style');
style.textContent = cssText;
document.head.appendChild(style);

const widgetContainer = document.getElementById("survey-widget-container")
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, widgetContainer
);

