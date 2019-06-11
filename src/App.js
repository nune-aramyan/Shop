import React from 'react';
import {  Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import Carousel from './Caruselion/Carousel';
import SearchAppBar from './Search'



class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      redirectSignIn: false ,
      redirectSignUn: false
    }
    this.setRedirectSignIn = this.setRedirectSignIn.bind(this);
    this.setRedirectSignUp = this.setRedirectSignUp.bind(this);
  }

  setRedirectSignIn() {
    this.setState({
      redirectSignIn: true
    })
  }

  setRedirectSignUp() {
    this.setState({
      redirectSignUp: true
    })
  }

  renderRedirectSignIn = () => {
    if (this.state.redirectSignIn) {
      return <Redirect to='/sign-in' />
    }
  }

  renderRedirectSignUp = () => {
    if (this.state.redirectSignUp) {
      return <Redirect to='/sign-up' />
    }
  }

  render(){
    return (
      <div className="App">
        
        <div className= 'blok'>
          <Link to="/">App</Link>
        </div>
        <SearchAppBar />
        <div className= 'blok'>
          <Link to="/home">Home</Link>
        </div>
        <div className= 'blok'>
          <Link to="/categories">Categories</Link>
        </div>
        <div className= 'blok'>
          <Link to="/products">Products</Link>
        </div>
        <div className= 'blok'>
          <Link to="/about">About</Link>
        </div>

        {this.renderRedirectSignIn()}
        <button className ='button' onClick = {this.setRedirectSignIn}>Sign In</button>

        {this.renderRedirectSignUp()}
        <button className ='button' onClick = {this.setRedirectSignUp}>Sign Up</button>

        <Carousel />
        
      </div>
    );
  }
}

export default App;
