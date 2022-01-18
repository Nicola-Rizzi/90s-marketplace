import {createStore } from 'redux';

import mainReducer from './mainReducer';
import { loadFromLocalStorage, saveToLocalStorage } from '../services/localStorage';

const persistedStore = loadFromLocalStorage();
const store = createStore(mainReducer, persistedStore);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;