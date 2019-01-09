// se le hace un cambio
import React from 'react';
import * as RB from 'react-bootstrap'; 
import CircularProgress from 'material-ui/CircularProgress';


class HeroeListComponent extends React.Component {

  constructor(props){
     super(props);

     this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event){
    this.setState({
      ...this.state,
      searchField : event.target.value,
    });
  }

  submitButton(){
    this.props.pushHeroe(this.state.searchField);
  }

  getHeroesList = (heroesArray) => {
    return heroesArray.map( heroe => <RB.Jumbotron href="#" key={heroe}>{heroe}</RB.Jumbotron> );
  }
  
  render(){
    return(
            <div>
                    <RB.FormControl id="searchField" type="text"
                                    placeholder="Search heroe..."
                                    onChange={this.updateInput}/> 
                    <RB.Button bsStyle="primary" onClick={e=>{ e.preventDefault();
                                                                this.submitButton();
                                                              }} >Add
                    </RB.Button>
                    { this.props.heroesArray !== null ?  this.getHeroesList(this.props.heroesArray)
                                      : <CircularProgress/>  }  
                                                  
            </div>
     );
  }
}






/*const getHeroesList = (heroesArray) => {
  debugger;
  //const {heroesArray} = heroes;
  return heroesArray.map( heroe => <RB.Jumbotron href="#" key={heroe}>{heroe}</RB.Jumbotron> );
}

const HeroeListComponent = ({heroesArray, pushHeroe}) =>{
     debugger;
      const state = this.getState();
      debugger;
      return(
          <div>
                   <RB.FormControl id="searchField" type="text"
                                   placeholder="Search heroe..."
                                   /> 
                   <RB.Button bsStyle="primary" onClick={e=>{ e.preventDefault();
                                                               pushHeroe('');
                                                            }} >Add
                  </RB.Button>
                  { heroesArray !== null ?  getHeroesList(heroesArray)
                                    : <CircularProgress/>  }  
                                                
          </div>
      );

}
*/
export default HeroeListComponent;
