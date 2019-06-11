import React from 'react';
import {  Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import Carousel from './Caruselion/Carousel';
import SearchAppBar from './Search'
import logo from'./images/logo.png';


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
  };

  renderRedirectSignUp = () => {
    if (this.state.redirectSignUp) {
      return <Redirect to='/sign-up' />
    }
  };

  render(){
    return (
      <div className="App">
        <header className="shp-header">
            <div className="shp-container shp-container--header">
                <h1 className="shp-logo">
                    <Link className="shp-logo_link" to="/"><img className="shp-logo_img" src={logo} alt="Handsome Classic"/></Link>
                </h1>

                <nav className="shp-nav">
                    <ul className="shp-nav_list list-reset">
                        <li className= 'shp-nav_item'>
                            <Link className="shp-nav_link main-transition" to="/home">Home</Link>
                        </li>
                        <li className= 'shp-nav_item shp-nav_item--dropdown-menu'>
                            <Link className="shp-nav_link main-transition" to="/categories">Categories</Link>
                            <ul className="shp-dropdown list-reset main-transition">
                                <li className="shp-dropdown_item">
                                    <Link className="shp-dropdown_link main-txt-clr main-transition" to="/categories">Suits</Link>
                                </li>
                                <li className="shp-dropdown_item">
                                    <Link className="shp-dropdown_link main-txt-clr main-transition" to="/categories">Shoes</Link>
                                </li>
                                <li className="shp-dropdown_item">
                                    <Link className="shp-dropdown_link main-txt-clr main-transition" to="/categories">Accessories</Link>
                                </li>
                            </ul>
                        </li>
                        <li className= 'shp-nav_item'>
                            <Link className="shp-nav_link main-transition" to="/products">Products</Link>
                        </li>
                        {/*<li className= 'shp-nav_item'>*/}
                            {/*<Link className="shp-nav_link" to="/about">About</Link>*/}
                        {/*</li>*/}
                    </ul>
                </nav>

                <SearchAppBar />

                <div className="signin-btns main-txt-clr">
                    {this.renderRedirectSignIn()}
                    <span className ='signin-btns_btn main-transition' onClick = {this.setRedirectSignIn}>Sign In</span>

                    <span>&nbsp;/&nbsp;</span>

                    {this.renderRedirectSignUp()}
                    <span className ='signin-btns_btn main-transition' onClick = {this.setRedirectSignUp}>Sign Up</span>
                </div>

            </div>



        </header>
        <main>
            <Carousel />

        </main>


      </div>
    );
  }
}

export default App;
