import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
  searchString: state.searchString,
});

export default connect(mapStateToProps)(App);
