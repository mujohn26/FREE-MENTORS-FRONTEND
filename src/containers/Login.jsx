import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppNavBar from '../components/common/AppNavBar.jsx';
import Footer from '../components/common/Footer.jsx';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {useStyles} from '../styles/Login';
import {loginUser, loginSuccess,deleteError} from '../actions/LoginAction';
import {createBrowserHistory} from 'history';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

export const history=createBrowserHistory({
    forceRefresh:true
  })
export class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

     

handleSubmit(event){
    // event.preventDefault();

const {email,password}= this.state;
const {loginUser} = this.props;
loginUser({email,password})


}

componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
        history.push('/');
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
        <Grid item xs={9}>

        </Grid>
        <Grid item xs>
  <Card className={classes.Card}>
     <CardHeader className={classes.CardHeader} title="Login to Free mentors" subheader="Please enter your email and password"/><Box m={3} />
    <CardContent >
    <Typography className={classes.cardText} paragraph>Email and Password</Typography><Box m={4} />
    <form className={classes.Form} onSubmit={this.handleSubmit.bind(this)}>
      <TextField name='email' type='email' className={classes.inputField} id="standard-search"  label="Email" required onChange={this.handleChange.bind(this)}  data-test="login-email-field" /> <Box m={4} />
      <TextField name= 'password' type='password' className={classes.inputField} id='user-input' label="Password" required onChange={this.handleChange.bind(this)} data-test="login-password-field"/><br/><Box m={1} />
      <Link href='#' variant='body2' style={{ textDecoration: 'none', color: '#0094FF' }}>{' '}
									Forgot password?
								</Link> <Box m={4} />
                                {this.props.errorMessage? <div><Alert severity="error">Invalid email or Password</Alert><Box m={2} /></div>:''}
        {!this.props.isLoading?<Button className={classes.button} variant="contained" color="primary" onClick={this.handleSubmit.bind(this)} data-test="login-btn">
        Login
      </Button>: <CircularProgress className={classes.loader}  />}

    </form>
     </CardContent>
  </Card>
        </Grid>

      </Grid>
</Paper>
            <Footer/>
            </div>
        );
    }
}

export const mapStateToProps = state => {
	return {
        data: state.LoginReducer.payload,
        errorMessage:state.LoginReducer.errorMessage,
        isLoading:state.LoginReducer.isLoading,
	
	};
};


const connectedLoginPage = connect(mapStateToProps, {
    loginUser, loginSuccess,deleteError
})(withStyles(useStyles)(Login));



export default connectedLoginPage