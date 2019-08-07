import React, { Component } from 'react';
import Aux from '../Auxi';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    sideDrawerToggleHandler = () => {
        const currentState = this.state.showSideDrawer;
        this.setState({ showSideDrawer: !currentState });
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    showSideDrawer={this.state.showSideDrawer}
                    closeSideDrawer={this.sideDrawerClosedHandler} />
                <div>toolbar sideDrawer, Backdrop</div>

                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    };


};

export default Layout;