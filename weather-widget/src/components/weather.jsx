import './weather.css'

export const Weather = ({location, temp, icon, status}) => (
  <div className='weather-container'>
    <h2>{location}</h2>
    <img src={icon} alt="weather-icon"></img>
    <h3>{temp}° C</h3>
    <h4>{status}</h4>

  </div>
);


/*

const Weather = (props) => {
    const location = props.location || "seleziona una città";
    const temp = props.temp || 0;
    const status = props.status || "N/A";
    const icon = props.icon
    const imgUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    
  
    return (
      <section className="container">
      <div className="weather-container"> 
        
        <ul className='city-menu'>
          <img src="{imgUrl}" alt="weather-icon"></img>
          <li>Location: {location}</li>
          <li>Temperatura: {temp}° C</li>
          <li>Condizione: {status}</li>
        </ul>
        </div>
        
      </section>
    );
  };
  
 export { Weather };

 */