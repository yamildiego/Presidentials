import React, { Component } from 'react';
import Candidate from './Candidate';
import './styles/VicePresident.css';
import data from './../data';

class VicePresident extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <h1 className="text-center">Candidatos a Vicepresidentes</h1>
                <div className="d-flex flex-wrap justify-content-center">
                    {
                        data.map((item) => {
                            return (
                                <Candidate key={item.id} nextStep={this.props.nextStep} {...item} candidate={item.vicepresident} imagecandidate={item.imagevicepresident} />
                            )
                        })
                    }
                </div>
            </React.Fragment>);
    }
}

export default VicePresident;