import React from 'react';

function Vacation(props) {
    console.log(props)
    return (
    <div className="vacation-card">
    <h1>Place: {props.place}</h1>
    <h2>Price: {props.price}</h2>
    <h2>Time To Go: {props.timeToGo}</h2>
    <br/>
     
</div>
    
)}

 export default Vacation