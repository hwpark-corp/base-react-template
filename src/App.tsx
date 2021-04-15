import React from 'react';
import { Provider } from 'react-redux';
import rootStore from 'commons/redux';

// Components
import AppLayout from 'components/templates/AppLayout';

function App() {
  return (
    <Provider store={rootStore}>
      <div className="App">
        <AppLayout />
      </div>
    </Provider>
  );
}

export default App;
