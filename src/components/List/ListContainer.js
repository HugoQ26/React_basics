import { connect } from 'react-redux';
import List from './List';

import {
  getColumnsForList,
  createActionAddColumn,
} from '../../redux/columnsRedux';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredLists = state.lists.filter(list => list.id == id);
  const listParams = filteredLists[0] || {};
  console.log('aaaaaaaaaa', listParams);

  return {
    ...listParams,
    columns: getColumnsForList(state, id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title =>
    dispatch(
      createActionAddColumn({
        listId: props.match.params.id,
        title,
      }),
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
