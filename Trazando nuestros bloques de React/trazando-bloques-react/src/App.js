import React from 'react';
import './App.css';
import Main from './components/main';
import SubContents from './components/subcontent';
import Advertisement from './components/Advertisement';
import Navigation from './components/Navigation';
import Header from './components/headerr';

function App() {
  return (
    <div className="app">
        <Header />
        <Navigation />
        <Main>
          <SubContents />
          <SubContents />
          <SubContents />
          <Advertisement />
        </Main>
    </div>
  );
}
                
export default App;

