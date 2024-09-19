import React, { useEffect, useState } from "react";
import axios from "axios";
import TouristInfo from "../information/TouristInfo";
import { useLocation } from "react-router-dom";
import { weatherDescKo } from "../information/weatherDescriptions";

function Tourist() {

    const location = useLocation();
    const selectedlocal = location.state.selectedlocal;

    const [tour, setTour] = useState([]);
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [weatherId, setWeatherId] = useState(0);
    const [weatherIcon, setWeatherIcon] = useState("");
    const [weatherImage, setWeatherImage] = useState("");
    const [temp, setTemp] = useState(0);
    const [weatherKo , setWeatherKo] = useState("");

    

    //.json에서 데이터 가져오기
    useEffect(() => {
        setLatLon();
    }, []); // Dependency array는 비워두어 한번만 호출되게 함.

    useEffect(() => {
        if(lat && lon) {
            getWeather();
        }
    },[lat, lon])

    useEffect(() => {
        console.log("total info , " , weatherId , weatherIcon, weatherImage, temp);
        setWeatherImage(`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`);
    }, [weatherIcon])

    useEffect(() => {
        // ID에 따른 정보
        setWeatherKo(weatherDescKo[weatherId]);
    }, [weatherId])

    const getTourist = async() => {
        try {
            // json-server로부터 tourist 데이터를 가져옴
            const response = await axios.get(`http://localhost:8000/tourist?local=${selectedlocal}`);
            console.log("response data: ", response.data);
            setTour(response.data);
        } catch (err) {
            console.log("Error fetching tourist data: ", err);
        }
    };

    const setLatLon = () => {
        if(selectedlocal == "Jeonju"){
            setLat("35.80918889");
            setLon("127.1219194");
        }
        getTourist();
    }

    const getWeather = async() => {
        try{
            const response = await axios.get(`http://localhost:8001/weather/get`, {
                params:{
                    lat : lat,
                    lon : lon
                }
            });
            console.log(lat , lon);
            console.log("weather api info , " , response.data);

            // 날씨 ID 가져오기
            setWeatherId(response.data.weather[0].id);
            // 날씨 아이콘 가져오기
            setWeatherIcon(response.data.weather[0].icon);
            setWeatherImage(`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`);
            setTemp((response.data.main.temp-273.15).toFixed(1));
        } catch (err) {
            console.log("weather api error " , err);
        }
    };

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col">
                    <h1>관광지 목록</h1>
                </div>
                <div className="col-auto">
                    <span style={{ fontSize: 20 }}>
                        <p style={{ margin: 0 }}>
                            날씨 및 온도 : <span><img src={weatherImage} style={{ width: 50 }} alt="weather" /></span>{temp}℃
                        </p>
                        <p style={{fontSize : 15, textAlign : "right"}}>{weatherKo}</p>
                    </span>
                </div>
            </div>
            <div className="form-control">
                <div>
                    {
                        tour.map((tourist) => (
                            <div key={tourist.title}>
                                <TouristInfo tour={tourist} />
                                <br/>
                                <hr/>
                                <br/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
    
}

export default Tourist;
