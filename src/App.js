import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import AppLoader from './AppLoader';
// import './config/ReactotronConfig';

import { store, persistor } from './store/index';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <AppLoader />
      </PersistGate>
    </Provider>
  );
}

export default App;

