import React from 'react';
import Main from './pages/Main';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

function App() {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <div className="App">
          <Main />
        </div>
      </QueryParamProvider>
    </Router>
  );
}

export default App;
