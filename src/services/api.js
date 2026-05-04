import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY

export async function fetchWeather(city) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    );

    return response.data;
  } catch (err) {
    console.log("Something went wrong:", err.message);
    return null;
  }
}

export async function FetchForecast(City) {
   try{
    const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${City}&appid=${API_KEY}&units=metric`,
  );

  return response.data;
   }catch(err){
    console.log("something want Wrong:" , err.message);
   }
}


 