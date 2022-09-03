import React from 'react';
import { AppBar,Toolbar, IconButton } from '@material-ui/core';



const Header = () => {
    
    return (
        <>
             <AppBar position="static">
                <Toolbar>
                    <h1>Les planètes du système solaire</h1>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;