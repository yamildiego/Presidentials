import React from 'react';
import { Route } from "react-router-dom";
import Home from './../pages/Home';
import Poll from './../pages/Poll';
import CookiesPolicy from './../pages/CookiesPolicy';
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
  state = { sideDrawerOpen: false }

  drawerToggleClickHandler = () => {
    this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/encuesta" component={Poll} />
        <Route path="/terminos-y-condiciones" component={Contact} />
        <Route path="/politica-de-cookies" component={CookiesPolicy} />
        <Route path="/contacto" component={Contact} />
      </div>

    )
  }
}

export default App;
