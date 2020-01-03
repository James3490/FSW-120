import React from 'react'

import Vacation from './Vacation'
import Data from './Data'


function App() {
  const VacationCard = Data.map(vacation => <Vacation key={vacation.id} place={vacation.place} price={vacation.price} timeToGo={vacation.timeToGo} />)
    
    return (
        <div>
            {VacationCard}            
        </div>
   
  );
}

export default App;
