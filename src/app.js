//https://reacttraining.com/react-router/

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTask from './components/ReactTask.js';

import 'bootstrap-css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const app = document.getElementById('app');
 
console.log('run 3');

ReactDOM.render(<ReactTask />,app); 