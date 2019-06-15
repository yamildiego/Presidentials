import React, { Component } from 'react';
import AlertCookies from './AlertCookies'
import Toolbar from './Toolbar/Toolbar'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop';

class AppLayout extends Component {
    state = { sideDrawerOpen: false }

    drawerToggleClickHandler = () => {
        this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
    }

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    }
    render() {
        return (
            <div className="AppContainer">
                <div className="AppItem">
                    <AlertCookies />
                    <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                    <SideDrawer show={this.state.sideDrawerOpen} handleClickCloseMenu={this.backdropClickHandler} />
                    {
                        this.state.sideDrawerOpen &&
                        <Backdrop click={this.backdropClickHandler} />
                    }
                </div>
                <main className="AppItem">
                    <div>
                        {this.props.children}
                    </div>
                </main>
            </div>
        );
    }
}

export default AppLayout;