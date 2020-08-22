import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import { spacing } from '@material-ui/system';

import GridList from '@material-ui/core/GridList';

import logo from '../../../assets/DietDietLogo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#ffffff',
        
    },

    image: {
        height: 100, 
        width: 100,
        padding: 10,
        borderRadius: 5,
        transitionDuration: 0.2,
     },

    loginButton: {
        position: "absolute",
        right: "20%",
    },

    registerButton: {
        position: "absolute",
        right: "10%"
    },
}));

const Navbar = () => {
    const classes = useStyles(); 
    return (
        <div>
            <AppBar className = {classes.root}>
                <ToolBar >
                    <img src={logo} alt="logo" className = {classes.image}/>
                    <Button>TheDietDiet</Button>
                    <Button>Product</Button>
                    <Button>Help</Button>
                    <Button className = {classes.loginButton}>Login</Button>
                    <Button className = {classes.registerButton}>Register</Button>

                </ToolBar>
            </AppBar>

        </div>
    );

};

export default Navbar; 