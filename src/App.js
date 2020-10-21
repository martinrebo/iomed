import React from 'react';

import Routes from './routes/Routes';

import {StateProvider} from './store/store'

import '@elastic/eui/dist/eui_theme_light.css';

function App() {
  return (
    <StateProvider>
      <Routes />
    </StateProvider>
  );


}

export default App;
