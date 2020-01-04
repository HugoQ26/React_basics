import { connect } from 'react-redux';
import SearchResults from './SearchResults';

import { getCardsForResult } from '../../redux/searchResultsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForResult(state, props.match.params.searchtext),
});

export default connect(mapStateToProps)(SearchResults);
