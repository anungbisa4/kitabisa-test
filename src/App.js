import React from 'react';
import './App.scss';
import FormTest from './containers/formTest';
import Results from './containers/Results';

function App() {
  return (
    <div className="row">
      <div className="col-md-5 mt-3 mx-auto">
      <div className="main" style={{ borderRadius : 0 }}>
        <div className="main-header">
          FRONTEND TEST
        </div>
        <div className="main-body">
          <h1>select one and click answer </h1>
          <FormTest />
          <Results />
        </div>
        <div className="main-footer">
          <p>@copyright 2019 kitabisa.com test</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
