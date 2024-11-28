import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import EmptyLocation from './EmptyLocation';
 

export default function InfoBox({info}){

    let date = new Date();
  
    return(
        <div> {info.city=="" ?
            <EmptyLocation/>
         : 
         <div className='InfoBox'>
            
         <div className='head-contentBox'>
             <div className='head-content'>
             <h1 id='city-name'>{<LocationOnIcon/>} {info.city} &nbsp;  {info.temp}&deg;</h1>
                <h3>{info.humidity>90 ? 
                    <ThunderstormIcon sx={{fontSize:'4rem',marginLeft:'60%',color:'white'}}/> 
                    : info.temp>15 ? <WbSunnyIcon sx={{fontSize:'4rem',marginLeft:'60%',color:'yellow'}}/> : 
                    <AcUnitIcon sx={{fontSize:'4rem',marginLeft:'60%',color:'white'}}/>}</h3>
                <h3>{date.toDateString()}</h3>
                
               <h3> High : {info.tempMax} &deg;C  &nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;Low : {info.tempMin} &deg;C</h3>
             </div>
            </div> 
            <div className='sub-contentBox'>
             <div id='sub1' className='sub-content'>
                 <h1>{info.climate} &nbsp; &nbsp;
                    {info.humidity>90 ? 
                    <ThunderstormIcon sx={{fontSize:'2rem',color:'white'}}/> 
                    : info.temp>15 ? <WbSunnyIcon sx={{fontSize:'2rem',color:'yellow'}}/> : 
                    <AcUnitIcon sx={{fontSize:'2rem',color:'white'}}/>}</h1>

                 <h2>{info.weather}</h2>
                </div>

                <div id='sub2' className='sub-content'>
                    <h1>Temp: {info.temp} &deg;C </h1>
                    <h2>Feels Like: {info.feelsLike} &deg;C</h2>
                </div>
                <div id='sub3' className='sub-content'>
                    <h2>Humidity : {info.humidity}</h2>
                    <h2>Wind Speed : {info.windSpeed}</h2>
                    <h2>Pressure : {info.pressure}</h2>
                </div>
            </div>
     </div>
}
        </div>
    )
}

