import React, { Component } from 'react';
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton } from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Constants from '../config';
import './styles/ThanksYou.css';

class ThanksYou extends Component {
    state = {}
    render() {
        return (
            <div className="ThanksYou mt-4">
                <h2>Gracias por participar de la encuesta</h2>
                <p>Los resultados ser&aacute;n publicados el 31 de Julio</p>
                <p>Te pedimos que compartas el sitio para poder llegar a la mayor cantidad de personas posibles</p>
                <div className="d-flex justify-content-center">
                    <div style={{ width: '140px', margin: 'auto' }}>
                        <FacebookShareButton quote={Constants.textShare} url={Constants.url} >
                            <div className="BtnFacebook">
                                <FontAwesomeIcon color="white" icon={['fab', 'facebook-square']} />
                                Compartir
                            </div>
                        </FacebookShareButton>
                    </div>
                    <div style={{ width: '140px', margin: 'auto' }}>
                        <TwitterShareButton quote={Constants.textShare} url={Constants.url} >
                            <div className="BtnTwitter">
                                <FontAwesomeIcon color="white" icon={['fab', 'twitter']} />
                                Compartir
                            </div>
                        </TwitterShareButton>
                    </div>
                    <div style={{ width: '140px', margin: 'auto' }}>
                        <WhatsappShareButton title={Constants.textShare} url={Constants.url} >
                            <div className="BtnWhatsapp">
                                <FontAwesomeIcon color="white" icon={['fab', 'whatsapp']} />
                                Compartir
                            </div>
                        </WhatsappShareButton>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThanksYou;