import './App.css';
import Header from './components/Header/header';
import Content from './components/Header/Content/content';
import Details from './pages/details/details';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

const[language,setlanguage]=useState('')

  return (
    <div className="App">

      <Header setlang={setlanguage}/>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Content language={language}/> } />
      
      <Route path="/details/:Id" element={<Details language={language}> </Details>} />
      
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
