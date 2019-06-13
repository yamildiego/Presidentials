import React, { Component } from 'react';
import ContactForm from './../components/ContactForm';
import './styles/Contact.css';
import AppLayout from '../components/AppLayout';

class Contact extends Component {
    state = {}
    render() {
        return (
            <AppLayout>
                <div className="Contact">
                    <ContactForm />
                </div>
            </AppLayout>
        );
    }
}

export default Contact;