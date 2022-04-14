
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DisplayQuotes } from './Components/DisplayQuotes';

function App() {
  const [quotes, setQuotes] = useState([]);
  
  const getQuotes = () => {
    axios
    .get(`https://simpsons-quotes-api.herokuapp.com/quotes`)
    .then((response) => response.data)
    .then((data) => {
      console.log(data);
    setQuotes(data);
    
  })
};
useEffect(() => {
  getQuotes();
}, [])    
  
  return (
    <div className="App">
      {quotes.map((quote, index) =><DisplayQuotes quote={quote} key={quote.character} /> )}
      
      <button type="button" onClick={getQuotes}>Simpsons Quotes</button>
    </div>
  );
}

export default App;
