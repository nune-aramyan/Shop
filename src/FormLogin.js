import './Styles.css';
import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import FormHelperText from '@material-ui/core/FormHelperText';




export class FormLogin extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputEmail: '',
      inputPass: '', 
      valid: false,
      redirect: false,
      redirectHome: false,
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleButtonClick = this.handleButtonClick.bind(this);
  this.handleButtonExit = this.handleButtonExit.bind(this);
  }
  
  handleChange (event, type){
    this.setState({
        [type] : event.target.value
    })
  }

  handleButtonClick(){
    let isValid = true;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.inputEmail))
        {
           isValid = false;
        }
    this.setState({
      valid: isValid,
      
    });

   
    if(!isValid){ 
      this.setState({
        redirect: true
      })
      firebase.auth().signInWithEmailAndPassword(this.state.inputEmail, this.state.inputPass)
      .then(function(){ console.log("Welcome to our shop")})
      .catch(_ => console.log("Your Login or Password is wrong, please Enter again"))
    }    
  }
  
  renderRedirect = () => {
    if (  this.state.redirect && !this.state.valid ) {
      return <Redirect to='/about' />
    }
  }

  renderRedirectHome = () => {
    if(this.state.redirectHome){
      return <Redirect to='/' />
    }
  }

  handleButtonExit ()  {
    let redir = false;
    this.setState({
      redirectHome: !redir
    })
  }

  render() {
    const isAllDone = (this.state.inputEmail.length > 0 && this.state.inputPass.length > 6 );
    const {inputEmail, inputPass, valid} = this.state;
    
    return (
    <div>
      <form className="sign-form">
        <h1>My Account</h1>
        <h2>Login</h2>

        <div className= "div1">
          <label> Email address * </label> 
          
            <TextField
                error={valid}
                className = "login-input"
                label="Login"
                type="text"
                autoComplete="current-password"
                variant="outlined"
                onChange={(event) => this.handleChange(event, 'inputEmail')}
                value = {inputEmail}
              />
              
        </div >
        <br></br>
        {(valid) ? <FormHelperText id="component-error-text">Խնդրում եմ լրացրեք ճիշտ </FormHelperText> : <div></div>}
              
        <div className= "div2">
          <label>Password * </label>
          <TextField
            className = "login-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            onChange={(event) => this.handleChange(event, 'inputPass')}
            value = {inputPass}
            />
        </div>
        {this.renderRedirect()}
        <Button 
            className = "button" 
            variant="contained" 
            color="primary"  
            disabled={!isAllDone} onClick={this.handleButtonClick}>
            Login
        </Button>
        {this.renderRedirectHome()}
        <Button 
            className = "button" 
            variant="contained" 
            color="primary"  
           onClick={this.handleButtonExit}>
            Go Home            
            </Button>

      </form>
      
    </div> 
    )
  }
}

export default FormLogin;