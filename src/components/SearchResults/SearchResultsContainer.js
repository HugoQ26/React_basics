import { connect } from 'react-redux';
import SearchResults from './SearchResults';

import { getCardsForResult } from '../../redux/searchResultsRedux';

const mapStateToProps = state => ({
  cards: getCardsForResult(state),
});

// const mapDispatchToProps = (dispatch, props) => ({
//   addCard: title =>
//     dispatch(
//       createActionAddCard({
//         columnId: props.id,
//         title,
//       }),
//     ),
// });

export default connect(mapStateToProps)(SearchResults);
