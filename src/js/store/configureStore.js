import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../components/DevTools';

export default function configureStore(initialState) {
  const middlewares = [];
  middlewares.push(thunkMiddleware);

  let createStoreWithMiddleware = applyMiddleware(...middlewares);

  if(__DEVTOOLS__) {
    createStoreWithMiddleware = compose(
      createStoreWithMiddleware,
      DevTools.instrument()
    );
  }

  const finalCreateStore = createStoreWithMiddleware(createStore);
  const store = finalCreateStore(rootReducer, initialState);

  if(__DEVELOPMENT__) {
    if(module.hot) {
      module.hot.accept('../reducers', () => {
        store.replaceReducer(require('../reducers'));
      });
    }
  }

	return store;
}
