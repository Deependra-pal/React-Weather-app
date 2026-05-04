import axios from "axios";

export async function fetchWeather(city) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=75d7efcb7b78218a52e2304533996930&units=metric`,
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
    `https://api.openweathermap.org/data/2.5/forecast?q=${City}&appid=75d7efcb7b78218a52e2304533996930&units=metric`,
  );

  return response.data;
   }catch(err){
    console.log("something want Wrong:" , err.message);
   }
}


 