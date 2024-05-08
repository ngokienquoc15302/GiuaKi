import React from 'react';
import Root from './navigations/Root';
import { StoreProvider } from './store';

const App = () => {
  return (
    <StoreProvider>
      <Root />
    </StoreProvider>
  );
};

export default App;
