import {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import useForm from './FormContext';
const apikey='48498a6c796f452597f153015231304';
const WeatherContext=createContext();
export const WeatherProvider=({children})=>{
    const [weather,setWeather]=useState([]);
    const {city,setCity}=useForm();
    useEffect(()=>{
        axios(`http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${city}&days=7&aqi=no&alerts=no`)
        .then((res)=>setWeather(res.data.forecast.forecastday
           
            ));
           
        
    },[city])
    const values={
        weather,
        setWeather
    }
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

const useWeather=()=>useContext(WeatherContext);
export default useWeather;