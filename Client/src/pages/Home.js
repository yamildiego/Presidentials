import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AppLayout from '../components/AppLayout';
import { FacebookShareButton } from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Constants from '../config';
import './styles/Home.css';


class Home extends Component {
    state = {}
    render() {
        return (
            <AppLayout>
                <div className="Home">
                    <h1>Encuesta sin fines de lucro</h1>
                    <h4>
                        Esta encuesta no percibe NINGUNA subvención, contribución o ayuda de ningún tipo.
                    </h4>
                    <h4>
                        Por lo tanto, es ajena a los intereses de medios de comunicación, empresas, partidos políticos u otras organizaciones
                    </h4>
                    <div className="HomeBody">
                        <Link to="encuesta" className="Btn BtnHome">
                            Ir a la encuesta
                       </Link>
                    </div>
                    <div style={{ width: '140px', margin: 'auto' }}>
                        <FacebookShareButton quote={Constants.textShare} url={Constants.url} >
                            <div className="BtnFacebook">
                                <FontAwesomeIcon color="white" icon={['fab', 'facebook-square']} />
                                Compartir
                            </div>
                        </FacebookShareButton>
                    </div>
                </div>
            </AppLayout>
        );
    }
}

export default Home;