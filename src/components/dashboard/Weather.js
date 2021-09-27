import React,{useState} from 'react';
import { Form } from 'react-bootstrap';

const Weather = () => {
  
  const [city,setCity] = useState("");
  const [result,setResult] = useState("");
  const changeHandler = e =>{
    setCity(e.target.value);
  }
  const submitHandler = async e =>{
    e.preventDefault();
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`);
        const weather = await response.json();
        const kelvin = weather.main.temp;
        const celcius = kelvin - 273.15;
        setResult("Temperature at "+city+"\n"+Math.round(celcius)+"°C");
        setCity("");
    } catch (error) {
        setResult("City Not Found");
        setCity("");
        console.log('Fetch error: ', error);
    }
  }

  return (
    <span>
        <Form className="form-inline" onSubmit={submitHandler}>
            <input className="form-control" size="30" type="text" name="city" onChange={changeHandler} value={city}/>
            <input className="form-control" type="submit" value="Get Temperature" />
        </Form><br />
        <div>
            <span style={{ fontSize: '22px',fontWeight: 'bold'}}>{result}</span> 
        </div>
    </span>
  );
}

export default Weather;