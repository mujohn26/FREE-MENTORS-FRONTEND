import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {createBrowserHistory} from 'history';
export const history=createBrowserHistory({
  forceRefresh:true
})
const useStyles = makeStyles(theme => ({
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

export default function AppNavBar() {
  const classes = useStyles();
const signup=()=>{
  history.push('/auth/signup');
}
const signin=()=>{
  history.push('/auth/login');
}
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
           FREE MENTORS
          </Typography>
          <Button color="inherit" onClick={signup}>Sign up</Button>
          
          <Button color="inherit" onClick={signin}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}