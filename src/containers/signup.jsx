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
import {useStyles} from '../styles/Signup';
import {signup,signupSuccess,signupError,deleteError} from '../actions/signupActions';
import {createBrowserHistory} from 'history';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

export const history=createBrowserHistory({
    forceRefresh:true
  })
export class Signup extends Component {

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
        <Grid item xs={9}>
        <img
						src='https://res.cloudinary.com/dsuepw053/image/upload/v1583093794/mentor2_mflwkn.jpg'
						width='100%'
						height='100%'
					/>
        </Grid>
        <Grid item xs>
  <Card className={classes.Card}>
     <CardHeader className={classes.CardHeader} title="SIGNUP" subheader="Fill the fields to create account"/>
    <CardContent >
    <Typography className={classes.cardText} paragraph>Create account</Typography>
    <form className={classes.Form} onSubmit={this.handleSubmit.bind(this)}>
      <TextField name='firstName' type='name' className={classes.inputField} id="standard-search"  label="First name" required onChange={this.handleChange.bind(this)}  data-test="signup-firstName-field" /> 
      <TextField name='lastName' type='name' className={classes.inputField} id="standard-search"  label="Last name" required onChange={this.handleChange.bind(this)}  data-test="signup-lastName-field" /> 
      <TextField name='email' type='email' className={classes.inputField} id="standard-search"  label="Email" required onChange={this.handleChange.bind(this)}  data-test="signup-email-field" />
      <TextField name= 'password' type='password' className={classes.inputField} id='user-input' label="Password" required onChange={this.handleChange.bind(this)} data-test="signup-password-field"/><br/>
      <TextField name='address' type='name' className={classes.inputField} id="standard-search"  label="address" required onChange={this.handleChange.bind(this)}  data-test="signup-address-field" /> 
      <TextField name='bio' type='name' className={classes.inputField} id="standard-search"  label="biography" required onChange={this.handleChange.bind(this)}  data-test="signup-bio-field" /> 
      <TextField name='occupation' type='name' className={classes.inputField} id="standard-search"  label="occupation" required onChange={this.handleChange.bind(this)}  data-test="signup-occupation-field" /> 
      <TextField name='expertise' type='name' className={classes.inputField} id="standard-search"  label="expertise" required onChange={this.handleChange.bind(this)}  data-test="login-expertise-field" /> 
      Do you have account ?<Link href='/auth/login' variant='body2' style={{ textDecoration: 'none', color: '#0094FF' }}>{' '}
									Login here
								</Link> <Box m={4} />
                                {this.props.errorMessage? <div><Alert severity="error">{this.props.errorMessage}</Alert><Box m={2} /></div>:''}
        {!this.props.isLoading?<Button className={classes.button} variant="contained" color="primary" onClick={this.handleSubmit.bind(this)} data-test="signup-btn">
      Signup
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
        data: state.SignupReducer.payload,
        errorMessage:state.SignupReducer.errorMessage,
        isLoading:state.SignupReducer.isLoading,
	
	};
};


const connectedSignupPage = connect(mapStateToProps, {
    signup,signupSuccess,signupError,deleteError
})(withStyles(useStyles)(Signup ));



export default connectedSignupPage