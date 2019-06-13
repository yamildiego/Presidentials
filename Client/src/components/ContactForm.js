import React from 'react';
import queryString from 'querystring';
import Constants from '../config';
import isset from './../utilities/isset';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loading from './Loading';
import './styles/ContactForm.css';

class ContactForm extends React.Component {
    state = {
        isLoading: false,
        form: {
            name: "",
            email: "",
            message: ""
        },
        showErrors: false,
        message: {
            type: "",
            text: ""
        }
    }
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    handleSubmit = e => {
        if (e) e.preventDefault();
        if (this.state.form.name === "" ||
            this.state.form.message === "" ||
            this.state.form.email === "") {
            this.setState({ showErrors: true });
        } else {
            this.setState({ isLoading: true });
            fetch(Constants.urlServerPHP + '/contact', {
                method: 'POST',
                body: queryString.stringify(this.state.form),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                }
            })
                .then(response => response.json())
                .then(response => {
                    if (response.status) {
                        if (isset(response.errors)) {
                            this.setState({ isLoading: false, message: { text: `Ups ha ocurrido un error en nuestros servidor, contacte al administrador del sistema. ${Constants.emailAdministrator}`, type: "ERROR" } });
                        } else {
                            this.setState({
                                showErrors: false,
                                message: {
                                    text: "La consulta se envio con éxito, te responderemos a la brevedad.",
                                    type: "OK"
                                },
                                form: {
                                    name: '',
                                    email: '',
                                    message: ''
                                }
                            });
                        }
                    } else {
                        this.setState({ isLoading: false, message: { text: `Ups ha ocurrido un error en nuestros servidor, contacte al administrador del sistema. ${Constants.emailAdministrator}`, type: "ERROR" } });
                    }
                    this.setState({ isLoading: false, message: { text: `Ups ha ocurrido un error en nuestros servidor, contacte al administrador del sistema. ${Constants.emailAdministrator}`, type: "ERROR" } });
                }).catch(() => {
                    this.setState({ isLoading: false, message: { text: `Ups ha ocurrido un error en nuestros servidor, contacte al administrador del sistema. ${Constants.emailAdministrator}`, type: "ERROR" } });
                    // console.error("casa");
                    // this.setState({ isLoading: false, messageError: "Ups ha ocurrido un error en nuestros servidor, contacte al administrador del sistema. " + Constants.emailAdministrator });
                });
        }
    }
    render() {
        return (
            <React.Fragment>
                <Loading loading={this.state.isLoading} />
                <form className="ContactForm form-horizontal mt-2" onSubmit={this.handleSubmit}>
                    <h2 className="heading  mb-2">
                        Contacto
                    </h2>
                    <div className="form-group">
                        <div className="col-12">
                            <label className="control-label" htmlFor="inputName">
                                <FontAwesomeIcon icon="user" />
                            </label>
                            <input
                                onChange={this.handleChange}
                                type="text"
                                className={(this.state.showErrors && this.state.form.name === "") ? "form-control formInputError" : "form-control"}
                                id="inputName"
                                name="name"
                                placeholder="Nombre"
                                value={this.state.form.name} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-12">
                            <label className="control-label" htmlFor="inputEmail">
                                <FontAwesomeIcon icon="at" />
                            </label>
                            <input
                                onChange={this.handleChange}
                                type="email"
                                className={(this.state.showErrors && this.state.form.email === "") ? "form-control formInputError" : "form-control"}
                                id="inputEmail"
                                name="email"
                                placeholder="Correo electr&oacute;nico"
                                value={this.state.form.email} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-12">
                            <label className="control-label" htmlFor="inputMessage">
                                <FontAwesomeIcon icon="envelope" />
                            </label>
                            <textarea
                                onChange={this.handleChange}
                                className={(this.state.showErrors && this.state.form.message === "") ? "form-control formInputError" : "form-control"}
                                id="inputMessage"
                                name="message"
                                placeholder="Mensaje"
                                value={this.state.form.message} />
                        </div>
                    </div>
                    {
                        this.state.message.text !== '' && this.state.message.type === 'OK' &&
                        <p className="alert alert-info">{this.state.message.text}</p>
                    }
                    {
                        this.state.message.text !== '' && this.state.message.type === 'ERROR' &&
                        <p className="alert alert-danger">{this.state.message.text}</p>
                    }
                    <div className="d-flex justify-content-end">
                        <button
                            type="submit"
                            className="btn btn-warning text-white">
                            Enviar
                        </button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default ContactForm;