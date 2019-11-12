import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    console.log('navItems  ' + props.isAuthenticated)
    const authRedirect = !props.isAuthenticated ? <NavigationItem link='/auth'>Authenticate</NavigationItem> : <NavigationItem link='/logout'>Logout</NavigationItem>
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/' exact>Burger Builder</NavigationItem>
            {props.isAuthenticated ? <NavigationItem link='/orders'>Orders</NavigationItem> : null}
            {authRedirect}
        </ul>
    )
}

export default navigationItems;