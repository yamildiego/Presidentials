import React from 'react';
import './DrawerToggleButton.css'

class DrawerToggleButton extends React.Component {
    render() {
        return (
            <button className="DrawerToggleButton" onClick={this.props.click}>
                <div className="DrawerToggleButtonLine"></div>
                <div className="DrawerToggleButtonLine"></div>
                <div className="DrawerToggleButtonLine"></div>
            </button>
        )
    }
}

export default DrawerToggleButton