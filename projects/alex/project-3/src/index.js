import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'macro-css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);




// import React from 'react';
// import { BrowserRouter as Router} from 'react-router-dom';
// import ReactDOM from 'react-dom/client';
// import './index.scss';
// import 'macro-css'

// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router>
//     <App />
//     </Router>
//     </React.StrictMode>
// );


