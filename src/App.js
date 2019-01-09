import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as RB from 'react-bootstrap'; 

//import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {NavBar} from './components/navbarComponent/NavbarComponent';
import HeroeContainer from './containers/heroeContainer/heroeContainer';

import { setHeroes } from './actions/heroeAction';
import { getHeroesArray } from './reducers/heroeReducer';



class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
            <NavBar/>
                          
            <RB.PageHeader>
                      Marvel's Heroes <small>List of Super Heroes</small>
            </RB.PageHeader>
            <HeroeContainer/>  
          </MuiThemeProvider>   
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({ 
  heroesArray: getHeroesArray(state),
});

const mapDispatchToPropsActions = dispatch => ({
  setHeroes: value => dispatch(setHeroes(value)),
});

export default connect(mapStateToProps, mapDispatchToPropsActions)(App);

