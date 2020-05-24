import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default class Navigation extends Component {

    render() {
        return (
            <div className={useStyles.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={useStyles.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={useStyles.title}>
                            News
                        </Typography>
                        <Button color="inherit" component={Link} to='/'>Home</Button>
                        <Button color="inherit" component={Link} to='/Test1'>Test1</Button>
                        <Button color="inherit" component={Link} to='/Test2'>Test2</Button>
                        <Button color="inherit" component={Link} to='/MainComponent'>MainComponet</Button>     
                        <Button color="inherit" component={Link} to='/ReduxPractice'>ReduxPractice</Button>     
                        <Button color="inherit" component={Link} to='/reduxAttemp2'>reduxAttemp2</Button>     
                    </Toolbar>
                </AppBar>
            </div>
           
        )
    }
}
