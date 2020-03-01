import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppNavBar from '../components/common/AppNavBarDashboard.jsx';
import Footer from '../components/common/Footer.jsx';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';


import {useStyles} from '../styles/Signup';

import {createBrowserHistory} from 'history';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider, Typography } from '@material-ui/core';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Mentors from '../containers/Mentors.jsx';
import Hidden from '@material-ui/core/Hidden';
export const history=createBrowserHistory({
    forceRefresh:true
  })
class Dashboad extends Component {
	constructor(props) {
		super(props);
		this.state = {
            firstName:'',
            lastName:'',
			email: '',
            password: '',
            address:'',
            bio:'',
            occupation:'',
            expertise:''
		};
	}

     

handleSubmit(event){


const {firstName,lastName,email,password,address,bio,occupation,expertise}= this.state;
const {signup} = this.props;
signup({firstName,lastName,email,password,address,bio,occupation,expertise});


}

componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
        history.push('/auth/login');
    }
}
handleChange(event){
    const {deleteError} = this.props;
    deleteError();
    this.setState({
        [event.target.name]: event.target.value,
    })
}

    render() {
        const {classes} = this.props;
        return (
            <div className='index'>
            <AppNavBar/>

<Paper elevation={0}  className={classes.paper}>

<Grid container spacing={3}>
<Hidden mdDown>
        <Grid item xs={3}>
        <Card className={classes.Card}>
        <CardHeader className={classes.CardHeader} title="DASHBOARD"/>

        <Divider />
				<ListItem button>
					<ListItemIcon>
                    <SupervisorAccountIcon  />
					</ListItemIcon>
					<ListItemText>
						<Link to='/mentors' style={{ textDecoration: 'none' }}>
							<Typography>Mentors</Typography>
						</Link>
					</ListItemText>
				</ListItem>
                </Card>
        </Grid>
        </Hidden>
        <Grid item xs>
 
     
        <Switch>
	
						<Route path='/mentors' component={Mentors} />

					</Switch>
  
        </Grid>

      </Grid>
</Paper>
            <Footer/>
            </div>
        );
    }
}
export default (withStyles(useStyles)( Dashboad));