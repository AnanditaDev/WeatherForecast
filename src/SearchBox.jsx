import "./SearchBox.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

import { useState } from "react";
import { InputAdornment } from "@mui/material";

export default function SearchBox({updateInfo}){

    let [city,setCity] = useState("") ;
    let [error,setError] = useState(false);
    
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = import.meta.env.VITE_API_URL;

    let getWeatherInfo = async() =>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse)
            let result= {
                city: city,
                feelsLike: jsonResponse.main.feels_like,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                climate: jsonResponse.weather[0].main,
                weather: jsonResponse.weather[0].description,
                country: jsonResponse.sys.country,
                windSpeed: jsonResponse.wind.speed,
                pressure: jsonResponse.main.pressure,
            };
          return result;
        }catch(err){
            throw err;
        }
    }
   
    let handleChange = (evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit = async(evt) =>{
       
        try{
            evt.preventDefault();
            let newInfo=  await getWeatherInfo();
            setError(false);
            setCity("");
            updateInfo(newInfo)
        }catch(err){
            
            setError(true);
        }
          
    }

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label={<InputAdornment>
                    <SearchIcon sx={{color:'#ffffff'}}/>
                    <span style={{color:'white'}}>Search for cities, states or countries</span>
                    </InputAdornment>}
                    value={city}
                    onChange={handleChange}
                  inputProps={{style:{color:'white',fontSize:'20px'}}}
                    className="input-box"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="contained" type="submit" className="search-btn">
                    Search
                </Button>
                {error && <h2 style={{ width:'25rem',marginLeft:'5.5rem',color:"red"}}>No such place exist!</h2>}
            </form>

        </div>
    )
}