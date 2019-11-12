import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        console.log("layOut  " + this.props.isAuthenticated)
        return (
            <Aux>
                <Toolbar isAuth={this.props.isAuthenticated} drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
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

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);