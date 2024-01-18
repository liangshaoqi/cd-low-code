import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@/layout/index'
import { ILogin } from 'common-module'

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>CdLowCode-低代码平台</title>
        <meta name="description" content="低代码" />
        <meta name="keywords" content="低代码,低代码平台,低代码网站,低代码后台,低代码系统,低代码后台系统,LowCode,lowCode,cd-low-code" />
      </Helmet>
      <Router>
        <Routes>
          <Route path='/' element={<Layout></Layout>}>

          </Route>
          <Route path='/login' element={<h1>login</h1>}>

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
