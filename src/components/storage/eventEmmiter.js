import EventEmitter from 'eventemitter3';
import data from '../../data/dataStore.js';

const emiter = new EventEmitter();

emiter.on('columnChange', data => {
  console.log(data);
});

export default emiter;
