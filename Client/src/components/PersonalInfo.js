import React, { Component } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './styles/PersonalInfo.css';
import Constants from '../config';

class PersonalInfo extends Component {
    state = {
        showErrors: false,
        form: {
            dni: '',
            lastname: ''
        },
        // value: null,
        // expired: false
        value: "DADASSDA",
        expired: false
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleVote = (event) => {
        if (event) event.preventDefault();

        if (this.state.form.dni === "" ||
            this.state.form.lastname === "" ||
            this.state.form.value === null ||
            this.state.form.expired === true)
            this.setState({ showErrors: true });
        else
            this.props.nextStep(this.state.form.dni, this.state.form.lastname)
    }

    onChange = value => {
        this.setState({ value });
        if (value === null) this.setState({ expired: true });
    }

    render() {
        return (
            <div className="PersonalInfo">
                <h2>
                    Datos Personales
                </h2>
                <p className="PersonalInfoSubtitle mt-4">
                    La información solicitada a continuación es solo con el fin de evitar múltiples votos de una misma persona.
                </p>
                <p className="PersonalInfoSubtitle mb-4">
                    Por cualquier duda consulte nuestros términos y condiciones.
                </p>
                <form onSubmit={this.handleVote}>
                    <div className="form-group">
                        <label htmlFor="dni">DNI</label>
                        <input
                            onChange={this.handleChange}
                            type="number"
                            min="1000000"
                            max="99999999"
                            className={(this.state.showErrors && this.state.form.dni === "") ? "form-control formInputError" : "form-control"}
                            id="dni"
                            name="dni"
                            placeholder="Introduzca su DNI"
                            value={this.state.form.dni} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Apellido</label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            className={(this.state.showErrors && this.state.form.lastname === "") ? "form-control formInputError" : "form-control"}
                            id="lastname"
                            name="lastname"
                            placeholder="Introduzca su apellido"
                            value={this.state.form.lastname} />
                    </div>
                    <div>
                        <ReCAPTCHA
                            sitekey={Constants.KEYCAPTCHA}
                            onChange={this.onChange}
                        />
                        {
                            this.state.showErrors && (this.state.value === null || this.state.expired === true) &&
                            <small className="text-danger">Demuestra que no eres un robot.</small>
                        }
                    </div>
                    <button type="submit" className="btn btn-warning text-white">VOTAR</button>
                </form>
            </div >
        );
    }
}

export default PersonalInfo;