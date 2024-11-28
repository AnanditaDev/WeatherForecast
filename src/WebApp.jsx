import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import "./WebApp.css"
import { useState } from "react"

export default function WebApp(){

    const HOT_URL = "https://www.pennlive.com/resizer/rXZQTLrAAUM8h5Ybxeu9sWe-Kik=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.pennlive.com/home/penn-media/width2048/img/wildaboutpa/photo/summer-sunrisejpg-8a3de64ee9c00a6e.jpg";
    const COLD_URL = "https://i.pinimg.com/736x/44/86/56/44865664fb42617435a3316a241c9921.jpg";
    const RAIN_URL = "https://i.pinimg.com/736x/64/87/fa/6487fac21775a45ce5467cb0ce6cd1ef.jpg";
    
    let [weatherInfo,setWeatherInfo] = useState({
        city: "",
        feelsLike: "",
        temp: "",
        tempMin: "",
        tempMax: "",
        humidity: "",
        climate:"",
        weather: "",
        country:"",
    })
    let [backGroundImg,setBackGroundImg] = useState();


    let updateInfo = (newInfo) =>{
        let refrenceInfo = newInfo;
        setWeatherInfo(newInfo);
        if(refrenceInfo.humidity>90){
            setBackGroundImg(RAIN_URL)
            document.body.style.backgroundImage = RAIN_URL;

        }
        else if(refrenceInfo.temp>15){
            setBackGroundImg(HOT_URL);
            document.body.style.backgroundImage = RAIN_URL;
        }
        else{
            setBackGroundImg(COLD_URL);
            document.body.style.backgroundImage = RAIN_URL;
        }
    }

    return(
        <div className="WebApp"  style={{width:'100%',height:'100%',backgroundImage: `url(${backGroundImg})`,opacity:'1'}}>
            <h1 className="heading">Know your weather ?</h1>
            <SearchBox updateInfo= {updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}