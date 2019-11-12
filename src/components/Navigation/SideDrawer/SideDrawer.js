import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../wrap/Auxi';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.showSideDrawer) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    console.log("sideDrawer   " + props.isAuth)
    return (
        <Aux>
            <Backdrop show={props.showSideDrawer} clicked={props.closeSideDrawer} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth} />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;