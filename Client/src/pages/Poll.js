import React, { Component } from 'react';
import { Link } from "react-router-dom";
import queryString from 'querystring';
import President from './../components/President';
import VicePresident from './../components/VicePresident';
import PersonalInfo from './../components/PersonalInfo';
import ThanksYou from './../components/ThanksYou';
import Loading from './../components/Loading';
import Constants from './../config';

class Poll extends Component {
    state = {
        isLoading: false,
        step: 0,
        president: null,
        vicepresident: null,
        already_voted: false,
        unexpected_error: false
    }
    votePresident = (presidentParam) => {
        this.setState({ isLoading: true, president: presidentParam });
        fetch(Constants.urlServerPHP + 'Votes/president', {
            method: 'POST',
            body: queryString.stringify({ vote: presidentParam }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
        }).then(response => response.json())
            .then(response => {
                this.setState({ isLoading: false, step: this.state.step + 1 })
            }).catch(e => {
                this.setState({ isLoading: false })
            })
    }
    voteVicePresident = (vicepresidentParam) => {
        this.setState({ isLoading: true, vicepresident: vicepresidentParam });
        fetch(Constants.urlServerPHP + 'Votes/vicepresident', {
            method: 'POST',
            body: queryString.stringify({ vote: vicepresidentParam }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
        }).then(response => response.json())
            .then(response => {
                this.setState({ isLoading: false, step: this.state.step + 1 })
            }).catch(e => {
                this.setState({ isLoading: false })
            })
    }
    voteFinally = (dni, lastname) => {
        this.setState({ isLoading: true });
        fetch(Constants.urlServerPHP + 'Votes/vt', {
            method: 'POST',
            body: queryString.stringify({
                dni: dni,
                lastname: lastname,
                president: this.state.president,
                vicepresident: this.state.vicepresident
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
        }).then(response => response.json())
            .then(response => {
                if (response.status === "OK")
                    this.setState({ isLoading: false, step: this.state.step + 1 })
                else
                    if (response.status === "ERROR") {
                        switch (response.data) {
                            case "already_voted":
                                this.setState({ isLoading: false, already_voted: true })
                                break;
                            default:
                                this.setState({ isLoading: false, unexpected_error: true })
                                break;
                        }
                    } else {
                        this.setState({ isLoading: false, unexpected_error: true })
                    }
            }).catch(e => {
                this.setState({ isLoading: false })
            })
    }
    render() {
        return (
            <div className="Poll">
                <Loading loading={this.state.isLoading} />
                {
                    this.state.step === 0 && !this.state.already_voted &&
                    <President nextStep={this.votePresident} />
                }
                {
                    this.state.step === 1 && !this.state.already_voted &&
                    <VicePresident nextStep={this.voteVicePresident} />
                }
                {
                    this.state.step === 2 && !this.state.already_voted &&
                    <PersonalInfo nextStep={this.voteFinally} />
                }
                {
                    this.state.step > 2 && !this.state.already_voted &&
                    <ThanksYou />
                }
                {
                    this.state.already_voted &&
                    <div>
                        <div className="m-4">
                            <div className="alert alert-warning m-auto" style={{ width: "30rem" }}>
                                Según nuestra información usted ya voto en esta encuesta. Contacte al administrador por cualquier inconveniente <Link to="contacto">Aqui!</Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <Link to="/" className="btn btn-info" type="button">Volver al inicio</Link>
                        </div>
                    </div>
                }
                {
                    this.state.unexpected_error &&
                    <div className="alert alert-danger">
                        Ocurri&oacute; un error inesperado contactase con el administrador <Link to="contacto">Aqui!</Link>
                    </div>
                }

            </div>
        );
    }
}

export default Poll;