import React from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import { Provider } from 'react-redux';

import './App.css';
import store from './redux/store';
import LoadingSpinner from './components/spinners/LoadingSpinner/LoadingSpinner';

const FormPage = React.lazy(() => import("./components/FormPage/FormPage"));

function App() {
  return (
    <HashRouter>
    <Provider store={store}>
      <React.Suspense fallback={<LoadingSpinner/>}>
        <div className="App">
          <div className="App-wrapper">
            <header className="App-header">
            </header>
            <main className="page-main">
              <h1 className="visually-hidden">Тестовое задание для компании It Solutions</h1>
              <Routes>
                <Route path='/' element={<FormPage/>}/>
              </Routes>
            </main>
          </div>
        </div>
      </React.Suspense>
    </Provider>
    </HashRouter>
  );
}

export default App;
