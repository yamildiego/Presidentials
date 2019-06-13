import React from 'react';
import { Link } from "react-router-dom";
import './SideDrawer.css'

class SideDrawer extends React.Component {
    handleClick = () => {
        this.props.handleClickCloseMenu();
    }
    render() {
        let drawerClasses = 'SideDrawer';
        if (this.props.show) {
            drawerClasses = 'SideDrawer SideDrawerOpen';
        }
        return (
            <nav className={drawerClasses}>
                <ul>
                    <li><Link to="/" onClick={this.handleClick}>Inicio</Link></li>
                    <li><Link to="/terminos-y-condiciones" onClick={this.handleClick}>T&eacute;rminos y condiciones</Link></li>
                    <li><Link to="/contacto" onClick={this.handleClick}>Contacto</Link></li>
                </ul>
            </nav>
        )
    }
}

export default SideDrawer;