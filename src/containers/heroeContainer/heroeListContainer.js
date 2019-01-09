import { connect } from 'react-redux';

import HeroeListComponent from './../../components/heroeComponent/heroeListComponent';
import { setHeroes, pushHeroe } from './../../actions/heroeAction';
import { getHeroesArray } from './../../reducers/heroeReducer';

const mapStateToProps = state => ({
    heroesArray: getHeroesArray(state),
});


const mapDispatchToPropsActions = dispatch => ({
    setHeroes: value => dispatch(setHeroes(value)),
    pushHeroe: value => dispatch(pushHeroe(value)),
});

export default connect(mapStateToProps, mapDispatchToPropsActions)(HeroeListComponent);