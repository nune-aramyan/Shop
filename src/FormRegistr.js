import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom'
import FormHelperText from '@material-ui/core/FormHelperText';
import formBg from './images/form-bg.jpg';


import firebase from 'firebase'


class FormRegistr extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputEmail: '',
            inputPass: '',
            inputConf: '',
            valid: false,
            validConf: false,
            redirectHome: false,

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleButtonExit = this.handleButtonExit.bind(this);
        this.renderRedirectHome = this.renderRedirectHome.bind(this);
    }

    handleChange (event, type){
        this.setState({
            [type] : event.target.value
        })
    }

        
    handleButtonExit ()  {
        this.setState({
          redirectHome: true
        })
    }
    renderRedirectHome () {
        if(this.state.redirectHome){
          return <Redirect to='/' />
        }
    }
    
    handleButtonClick(){
        let isValid = true;
        let isValidConf = true;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.inputEmail))
            {
               isValid = false;
            }
        let pass= this.state.inputPass;
        let conf= this.state.inputConf;
        if(pass.length === conf.length){
            for(let i= 0 ; i < pass.length; ++i){
            if(pass[i] !== conf[i]){
                isValidConf = true;
                break
            }else{
                isValidConf = false;
            }
          }
        }

        this.setState({
          valid: isValid,
          validConf: isValidConf
        });
        if(!isValid && !isValidConf){
            firebase.auth().createUserWithEmailAndPassword(this.state.inputEmail, this.state.inputPass).then(function (){
                var user = firebase.auth().currentUser;
                console.log(user.inputEmail)
            }
            )
            

        }
    }


    render() {
        const isAllDone = (this.state.inputEmail.length > 0 && this.state.inputPass.length > 6 && this.state.inputConf.length > 6);
        const {inputEmail, inputPass, inputConf, valid, validConf} = this.state;
        return (
            <div className="register-wrapp">
                <div className="register-form">
                    <div className="register-form_img-holder"></div>
                    <div className="register-form_form-holder">
                        <h2 className="register-form_title">Register to</h2>
                        <form className="">

                            <div className= "form-group">
                                {/*<label className="form-label">Email address * </label>*/}
                                <input className="form-control form-control--dark" type="text" placeholder="Email" value = {inputEmail}  onChange={(event) => this.handleChange(event, 'inputEmail')}/>
                                {/*<TextField*/}
                                {/*error={valid}*/}
                                {/*className = "login-input"*/}
                                {/*label="Login"*/}
                                {/*type="text"*/}
                                {/*autoComplete="current-password"*/}
                                {/*variant="outlined"*/}
                                {/*onChange={(event) => this.handleChange(event, 'inputEmail')}*/}
                                {/*value = {inputEmail}*/}
                                {/*/>*/}
                            </div >
                            <br></br>
                            {(valid) ? <FormHelperText id="component-error-text">Խնդրում եմ լրացրեք ճիշտ </FormHelperText> : <div></div>}

                            <div className= "form-group">
                                {/*<label className="form-label">Password * </label>*/}
                                <input className="form-control form-control--dark" type="password" placeholder="Password" value = {inputPass}  onChange={(event) => this.handleChange(event, 'inputPass')} />

                                {/*<TextField*/}
                                    {/*className = "login-input"*/}
                                    {/*label="Password"*/}
                                    {/*type="password"*/}
                                    {/*autoComplete="current-password"*/}
                                    {/*variant="outlined"*/}
                                    {/*onChange={(event) => this.handleChange(event, 'inputPass')}*/}
                                    {/*value = {inputPass}*/}
                                {/*/>*/}
                            </div>

                            <div className= "form-group">
                                {/*<label className="form-label">Confirm your Password * </label>*/}
                                <input className="form-control form-control--dark" type="password" placeholder="Confirm Password" value = {inputConf}  onChange={(event) => this.handleChange(event, 'inputConf')} />

                                {/*<TextField*/}
                                    {/*error={validConf}*/}
                                    {/*className = "login-input"*/}
                                    {/*label="Confirm"*/}
                                    {/*type="password"*/}
                                    {/*autoComplete="current-password"*/}
                                    {/*variant="outlined"*/}
                                    {/*onChange={(event) => this.handleChange(event, 'inputConf')}*/}
                                    {/*value = {inputConf}*/}
                                {/*/>*/}
                            </div>
                            {(validConf) ? <FormHelperText id="component-error-text">Պառոլներդ նույնը չի  </FormHelperText> : <div></div>}

                            <div className="form-group">
                                <button className="shp-btn shp-btn--dark" disabled={!isAllDone} onClick={this.handleButtonClick}>Register</button>
                                {/*<Button*/}
                                    {/*className = "button"*/}
                                    {/*variant="contained"*/}
                                    {/*color="primary"*/}
                                    {/*disabled={!isAllDone} onClick={this.handleButtonClick}>*/}
                                    {/*Register*/}
                                {/*</Button>*/}

                                {this.renderRedirectHome()}
                                <Button
                                    className = "button"
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleButtonExit}>
                                    Go Home
                                </Button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormRegistr