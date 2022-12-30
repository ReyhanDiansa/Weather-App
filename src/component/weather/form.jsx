import React, { useState } from "react";
import "./style.css";

//functional component location form
function LocationForm() {
  
  //state location->berisi hasil inputan user 
  //state coordinates-> berisi koordinat dari lokasi hasil inputan
  //state weather -> berisi informasi cuaca dari lokasi yang di inputkan
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [weather, setWeather] = useState(null);

  //function yang dijalankan ketika user melakukan pencarian
  async function handleSubmit(event) {
    event.preventDefault();
    
    //mengambil data dari API openstreetmap berdasarkan lokasi yang diinput user
    const lokasi = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${location}&format=json`
    );
    const locResult = await lokasi.json();
    
    //mengambil data dari API openweathermap berdasarkan koordinat hasil dari fetch API sebelumnya
    const API_KEY = "5350af6a93aacd964eb9f66a919c63f4";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${locResult[0].lat}&lon=${locResult[0].lon}&lang=id&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();

    //isi state dengan hasil dari kedua fetch API diatas
    setWeather(data);
    setCoordinates({
      latitude: locResult[0].lat,
      longitude: locResult[0].lon,
      name: locResult[0].display_name,
    });
    
    //set state location menjadi kosong lagi
    setLocation("");
  }

  return (
    <React.Fragment>
      <div class="container">
        <form onSubmit={handleSubmit}>
              <h1>Welcome to Indonesian Weather App</h1>
              <p>Masukkan lokasi anda</p>
          <div class="cari">
            <div class="search">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="ex: tebet jakarta selatan"
                />
            </div>
            <div class="submit">
              <button type="submit">Cari</button>
            </div>
          </div>
        </form>
      </div>

      {/* jika state weather tidak kosong maka tampilkan code berikut */}
      {weather && (
          <div class="card">
            <div class="card-title">
              <h1>{coordinates.name}</h1>
            </div>
            <div class="garis">
              <p>Garis Lintang: {coordinates.latitude}  |</p>
            
              <p>| Garis Bujur: {coordinates.longitude}</p>
            </div>
            <div class="card-body">
                <h4>{weather.weather[0].main}</h4>
              {/* <h2>Weather in {location}:</h2> */}
              <p>Temperatur: {weather.main.temp}°C</p>
              <p>Kelembaban: {weather.main.humidity}%</p>
              <p>Kecepatan Angin: {weather.wind.speed}m/s</p>
              <p>Tekanan atmosfer: {weather.main.pressure}hPa</p>
              <p>Keadaaan Mendung: {weather.clouds.all}%</p>
              <p>Deskripsi: {weather.weather[0].description}</p>
            </div>
          </div>
      )}
    </React.Fragment>
  );
}

export default LocationForm;
