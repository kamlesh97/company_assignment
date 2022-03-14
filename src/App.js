import React, { useEffect } from 'react';
import './App.css';
import Company from './component/Company';
import DisplayCompanyData from './component/DisplayCompanyData';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        
       
        <Company/>
        <DisplayCompanyData/> 
      </header>
    </div>
  );
}

export default App;
