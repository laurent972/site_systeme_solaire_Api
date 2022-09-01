import React from 'react';
import { AppBar,Toolbar, IconButton } from '@material-ui/core';



const Header = () => {
    
    return (
        <div>
             <AppBar position="static">
                <Toolbar>
                    
                    <h1>Planetes</h1>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;