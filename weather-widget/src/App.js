import { useState } from "react";

import { Intro } from "./components/intro";
import { Cities } from "./components/cities";
import { Weather } from "./components/weather";


import './App.css';

const apiKey = "1d00d4c9d5554bbb1fc814776caff71d";

function App() {
  const [location, setLocation] = useState("Seleziona una città");
  const [temp, setTemp] = useState(" --");
  const [status, setStatus] = useState("--N/A--");
  const [icon, setIcon] = useState("https://openweathermap.org/img/wn/11d@2x.png");

  const update = async (value) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`;
    console.log(url);

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    setLocation(data.name);
    setTemp(Math.round(data.main.temp)); // math.round per arrotondare 
    setIcon(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    setStatus(data.weather[0].description);
    
  };

  return (
    <main>
      <Intro />
      <Cities notify={update} />
      
      <Weather 
      location={location} 
      temp={temp} 
      icon={icon} 
      status={status} 
      

      />
    </main>
  );
}




export default App;
