import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RegisterForm from './form';
import App from './App';
import Error from './pages/error';
import Lifecycle from './lifecycle';
import Counter from './counter.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Comments from './comments';
import Like from './like';
import Nav from './nav';
import MovieList from './Movielist';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<Comments />
  <Like />
  <Nav/>
  <MovieList/>
   </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
