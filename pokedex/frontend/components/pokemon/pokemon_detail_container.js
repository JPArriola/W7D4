import { connect } from 'react-redux';
import { requestPokemon } from '../../actions/pokemon_actions';

import PokemonDetail from './pokemon_detail';
// import { selectAllPokemon } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]
  }
};

const mapDispatchToProps = dispatch => ({
  requestPokemon: (id) => dispatch(requestPokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);