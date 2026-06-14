import './App.css'
import CitySelector from './components/CitySelector/CitySelector'
import CityCard from './components/CityCard/CityCard'
import { useState } from "react";

function App() {

  

  const [selectedCity, setSelectedCity] = useState(null);
    return (
    <div className='app'>
      
      <CitySelector onSelectCity={setSelectedCity}/>

      <CityCard city={selectedCity}/>

    </div>
  );
}

export default App
