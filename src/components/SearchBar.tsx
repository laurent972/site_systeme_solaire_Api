import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import search from './Icon/icons/search.svg';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { width } from '@material-ui/system';



export default function CustomizedInputBase(){
    return(
        <div className="SearchEngine" style={{width:'50%', margin:'2em auto'}}>
            
            <Paper component= 'form'>
                <InputBase  placeholder="search" inputProps={{'aria-label': 'search'}} style={{height:'5em', width:'60%', padding:'1em'}} />
                <IconButton style={{height:'2em', width:'20%', maxWidth:'200px', padding:'1em', borderRadius:'10px', border:'1px solid #aaa'}} type="submit" aria-label="search">
                   Search
                </IconButton>
            </Paper>
        </div>
    )
}