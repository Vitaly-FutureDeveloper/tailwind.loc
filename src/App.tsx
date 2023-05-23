import React from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import {Provider} from 'react-redux';

import './App.css';

import store from './redux/store';
import LoadingSpinner from './components/spinners/LoadingSpinner/LoadingSpinner';
import {Header} from "./components/inc/Header/Header";
import {Footer} from "./components/inc/Footer/Footer";

const FormPage = React.lazy(() => import("./components/FormPage/FormPage"));

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <React.Suspense fallback={<LoadingSpinner/>}>

          <div className="font-main text-slate-900">
            <div className="">
              <Header/>
              <main className="">
                <h1 className="visually-hidden">Тестовое задание для компании It Solutions</h1>
                <Routes>
                  <Route path='*' element={<FormPage/>}/>
                </Routes>
              </main>
              <Footer />
            </div>
          </div>

        </React.Suspense>
      </Provider>
    </HashRouter>
  );
}

export default App;
