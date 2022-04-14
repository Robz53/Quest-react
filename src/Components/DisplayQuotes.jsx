import React from 'react'

export const DisplayQuotes = ({quote}) => {
 console.log("quote>>>",quote)
  return (
    <ul>
        
         <img src={quote.image} alt=''/> <br/>
         {quote.character}<br/>
         {quote.quote}
    </ul>
  )}
