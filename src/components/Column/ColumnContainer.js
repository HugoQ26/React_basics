import { connect } from 'react-redux';
import Column from './Column';

import { getCardsForColumn, createActionAddCard } from '../../redux/cardsRedux';

// const getCardsForColumn = ({ cards }, columnId) =>
//   cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
  searchString: state.searchString,
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title =>
    dispatch(
      createActionAddCard({
        columnId: props.id,
        title,
      }),
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
