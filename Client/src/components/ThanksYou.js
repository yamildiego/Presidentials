import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './styles/ThanksYou.css';

class ThanksYou extends Component {
    state = {}
    render() {
        return (
            <div className="ThanksYou mt-4">
                <h2>Gracias por participar de la encuesta</h2>
                <p>Los resultados ser&aacute;n publicados el 20 de Julio</p>
                <p>Te pedimos que compartas el sitio para poder llegar a la mayor cantidad de personas posibles</p>
                <div className="text-center">
                    {/* <div className="fb-share-button"
                        data-size="large"
                        data-href="https://www.presidenciales.com.ar"
                        data-layout="button">
                    </div> */}
                    <div className="text-center">
                        <Link to="/" className="btn btn-info" type="button">Volver al inicio</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThanksYou;