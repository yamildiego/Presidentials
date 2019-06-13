import React from 'react';
import { Link } from "react-router-dom";
import Logo from './../../assets/image/logo.webp';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

class Toolbar extends React.Component {
    render() {
        return (
            <header className="Toolbar">
                <nav className="ToolbarNavigation">
                    <div className="ToolbarToggleButton">
                        <DrawerToggleButton click={this.props.drawerClickHandler} />
                    </div>
                    <div className="ToolbarLogo">
                        <Link to="/">
                            <img src={Logo} alt="Elecciones presidenciales" />
                        </Link>
                    </div>
                    <div className="ToolbarSpacer" />
                    <div className="ToolbarNavigationItems">
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/terminos-y-condiciones">T&eacute;rminos y condiciones</Link></li>
                            <li><Link to="/contacto">Contacto</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Toolbar;