import React, { Component } from 'react';
import Candidate from './Candidate';
import './styles/President.css';
import data from './../data';

class President extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="text-center">Candidatos a presidente</h1>
                <div className="d-flex flex-wrap justify-content-center">
                    {
                        data.map((item) => {
                            return (
                                <Candidate key={item.id} nextStep={this.props.nextStep} {...item} candidate={item.president} imagecandidate={item.imagepresident} />
                            )
                        })
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default President;