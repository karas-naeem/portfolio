import "../Weather.css";
import {Divider, Stack, Typography} from "@mui/material";
import sunny from "../sunny.svg";
import axios from "axios";
import {useEffect, useRef, useState} from "react";
import moment from "moment/moment";
import "moment/min/locales";
import { useTranslation } from "react-i18next";

export default function Weather() {

    const {t,i18n} = useTranslation();
    const [lang,SetLang] = useState('en');
    const [weatherData,SetWeatherData] = useState({
        description:"",
        temp:0,
        min:0,
        max:0,
    });

    const dateOfDay = useRef("");

    useEffect(() => {

        moment.locale(`${lang}`);
        dateOfDay.current = moment().format("ll")
        i18n.changeLanguage(lang)
        let cancelAxios = null;
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=31.205753&lon=29.924526&appid=3fdf272634d32adae44b8a99d8c061b3&units=metric&exclude=daily&lang=${lang}`,
            {
                cancelToken: new axios.CancelToken((c) => {
                    cancelAxios = c;
                })
            })
            .then(function (response) {
                SetWeatherData({
                    description: response.data.weather[0].description,
                    temp: response.data.main.temp,
                    max: response.data.main.temp_max,
                    min: response.data.main.temp_min,
                });

                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })

            return () => {
                cancelAxios();
            }
    },[lang,i18n])    

    
    

    return (
            <div className="weather-app" style={{width: "100vw", height: "100vh",background:"#4F4FCE",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",direction:lang==="en"?"ltr":"rtl",fontFamily:"Ibm-plex-sans-ariabc`"}} >
                    {/* card */}
                    <div style={{backgroundColor: "#6969CC",borderRadius:"25px",width:"60vw",height:"65vh",textAlign:"center"}}>
                        {/* content */}
                        <div>
                            {/* city and time */}
                            <div style={{display: "flex", justifyContent: "space-around", alignItems:"center", padding:"15px"}}>
                                <Typography sx={{fontSize:"5vw"}}>
                                    {t('cairo')}
                                </Typography>
                                <Typography>
                                    {dateOfDay.current}
                                </Typography>
                            </div>
                            {/* city and time */}
                            <Divider color="white"></Divider>
                            <div className="weather" style={{display:"flex",flexDirection:"row", justifyContent:"space-around",  padding:"15px"}}>
                                <div>
                                    <Typography variant="h2" style={{fontWeight:"500"}}>
                                        {weatherData.temp}
                                    </Typography>
                                    <Typography variant="h3">
                                        {weatherData.description}
                                    </Typography>
                                    <Stack direction="row" gap={7}>
                                        <Typography variant="h6">   
                                            {t('temp max')} | {weatherData.max}
                                        </Typography>
                                        <Typography variant="h6">
                                            {t('temp min')} | {weatherData.min}
                                        </Typography>
                                    </Stack>
                                </div>
                                <div>
                                    {/*eslint-disable-next-line*/}
                                    <img src={sunny} className="weather-image" alt="weather image" style={{width:"12.5vw"}} />
                                </div>
                            </div>
                        </div>
                        {/* content */}
                    </div>
                    {/* card */}
                    <button style={{textAlign:"start",width:"60vw",background:"none",color:"white"}} onClick={ () => {
                        const Lang = lang === "en" ? "ar" : "en";
                        console.log(Lang,lang)
                        SetLang(Lang);
                    }}>
                        <p>{t('switchLang')}</p>
                    </button>
            </div>
    )
}