import React from 'react';
import { AppBar,Toolbar, IconButton } from '@material-ui/core';
import { BrowserRouter, NavLink, useHistory, Route,Redirect } from "react-router-dom";



const Header = () => {
 
   
    return (
        <>
             <AppBar position="static">
                <Toolbar>
                    <BrowserRouter>
                        <NavLink to='/'>
                            <h1>Les planètes du système solaire</h1>
                        </NavLink>
                    </BrowserRouter>
                </Toolbar>
            </AppBar>
        </>
    );
};



export default Header;