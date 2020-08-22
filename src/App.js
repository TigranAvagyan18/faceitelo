import React from 'react';
import Components from './components/components';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Components.Header}></Route>
      <Route exact path='/' component={Components.Main}></Route>
      <Route path='/players/:string' render={(props) => (<Components.Player {...props} key={document.location.href} />)}></Route>
    </BrowserRouter>
  );
}

export default App;
