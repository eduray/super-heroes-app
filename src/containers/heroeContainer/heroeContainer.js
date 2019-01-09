import React from 'react';
import { connect } from 'react-redux';
import * as RB from 'react-bootstrap'; 


import HeroeListContainer from './heroeListContainer';
import { getHeroes, setHeroes, pushHeroe, getHeroesFromService } from './../../actions/heroeAction';
import { getHeroesArray } from './../../reducers/heroeReducer';

class HeroeContainer extends React.Component {
  
  componentDidMount(){
     this.props.getHeroesFromService();
  }  

  render(){
    return(
            <RB.Grid>
            <RB.Row className="show-grid">
            <RB.Col md={6} mdPush={6}>
                <RB.Panel>
                    <RB.Panel.Heading>
                    Heroes Detail
                    </RB.Panel.Heading>
                    <RB.Panel.Body>
                                
                    </RB.Panel.Body>
                </RB.Panel>
            </RB.Col>


            <RB.Col md={6} mdPull={6}>
                <RB.Panel>
                    <RB.Panel.Heading>
                    Heroes List
                    </RB.Panel.Heading>
                    <RB.Panel.Body>
                        <HeroeListContainer/>          
                    </RB.Panel.Body>
                </RB.Panel>
            </RB.Col>

            </RB.Row>
        </RB.Grid>       
    );
}
}//end class

const mapStateToProps = state => ({
    heroesArray: getHeroesArray(state),
});


const mapDispatchToPropsActions = dispatch => ({
    setHeroes: value => dispatch(setHeroes(value)),
    getHeroes: value => dispatch(getHeroes()),
    pushHeroe: value => dispatch(pushHeroe(value)),
    getHeroesFromService: () => dispatch(getHeroesFromService()),
});

export default connect(mapStateToProps, mapDispatchToPropsActions)(HeroeContainer);
