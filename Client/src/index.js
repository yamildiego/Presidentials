import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookSquare, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

library.add(fab, faFacebookSquare, faWhatsapp, faTwitter);

ReactDOM.render(
    <Router basename="/">
        <App />
    </Router>,
    document.getElementById('root'));

serviceWorker.unregister();
