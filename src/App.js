import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { RouterDist } from './RouteDist';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            {RouterDist.map((s, i) => {
              if (i === 0) {
                return (
                  <Route key={'route' + i} path={s.path} exact component={s.module} />
                );
              } else {
                return (
                  <Route key={'route' + i} path={s.path} component={s.module} />
                );
              }
            })}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
