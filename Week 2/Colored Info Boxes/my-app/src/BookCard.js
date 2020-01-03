import React from 'react';


  
function BookCard(props) {
    const mystyle = {
        color: "black",
        backgroundColor: "rgb(220,239,246)",
        padding: "10px",
        fontFamily: "Arial"
      };
    console.log(props)
    return (
        <div style={mystyle} className="book-card">
            <h2>Title: {props.book.title}</h2>
            <h2>Subtitle: {props.book.subtitle}</h2>
            <h2>Author: {props.book.author}</h2>
            <h3>Description: {props.book.description}</h3>
            <br/>
            
        </div>
    )}

    export default BookCard