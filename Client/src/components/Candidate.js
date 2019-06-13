import React, { Component } from 'react';
import './styles/Candidate.css';

class Candidate extends Component {
    state = {}
    handleClick = (event) => {
        if (event) event.preventDefault();
        this.props.nextStep(this.props.id);
    }
    render() {
        return (
            <div className="Candidate">
                <div className="card" style={{ width: "15rem" }}>
                    <div className="d-flex flex-column justify-content-around">
                        <div className="text-center" style={{ maxWidth: "100%" }}>
                            {
                                this.props.imagecandidate &&
                                <img src={this.props.imagecandidate} className="card-img-top CandidateImage" alt="..." />
                            }
                        </div>
                        <div className="card-body">
                            <button type="button" onClick={this.handleClick} className="btn btn-warning btn-block text-white">VOTAR</button>
                        </div>
                        <div style={{ height: "140px" }}>
                            <div className="text-center">
                                {
                                    this.props.image &&
                                    <img src={this.props.image} className="card-img-top CandidateLogoImage" alt="..." />
                                }
                            </div>
                            <h5 className="card-title text-center">{this.props.candidate}</h5>
                        </div>
                        <div className="card-footer text-center">
                            {this.props.name}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Candidate;