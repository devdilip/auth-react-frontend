import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import WrappingComponent from './Components/HigherOrderComponents/WrappingComponent';
import AppRoutingModule from './Routing';


class App extends React.Component {
  render() {
    return (
      <WrappingComponent>
          <BrowserRouter>
            <AppRoutingModule />
          </BrowserRouter>
      </WrappingComponent>
    );
  }
}

export default App;
