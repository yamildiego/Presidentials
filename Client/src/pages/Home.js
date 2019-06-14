import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './styles/Home.css';
import AppLayout from '../components/AppLayout';

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
                        Por lo tanto, es ajena a los intereses de medios de comunicación, empresas, partido político u otras organizaciones
                    </h4>
                    <div className="HomeBody">
                        <Link to="encuesta" className="Btn BtnHome">
                            Ir a la encuesta
                       </Link>
                    </div>
                </div>
            </AppLayout>
        );
    }
}

export default Home;