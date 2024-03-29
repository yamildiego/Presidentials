import React from 'react';
import { Route } from "react-router-dom";
import Home from './../pages/Home';
import Poll from './../pages/Poll';
import CookiesPolicy from './../pages/CookiesPolicy';
import TermsAndConditions from './../pages/TermsAndConditions';
import Contact from './../pages/Contact';
import './styles/App.css';
import './../assets/fonts/fonts.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import {
  faTimes, faSpinner,
  faUser, faPhone, faEnvelope, faAt
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faFacebookF,
  faTimes, faSpinner,
  faUser, faPhone, faEnvelope, faAt);


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/encuesta" component={Poll} />
        <Route path="/terminos-y-condiciones" component={TermsAndConditions} />
        <Route path="/politica-de-cookies" component={CookiesPolicy} />
        <Route path="/contacto" component={Contact} />
      </div>
    )
  }
}

export default App;
