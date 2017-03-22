import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../App';
import { getPersons } from '../../ducks/person';

export default connect(
  state => ({
    loading: state.generic.get('loading'),
    errorMessage: state.generic.get('errorMessage'),
  }),
  dispatch => bindActionCreators({
    getPersons,
  }, dispatch),
)(App);