import React, { useState } from "react";

const api = {
  key: "a586bf71c066de3173f37b3360f6a80b",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (evt) => {
    if (evt.key === "Enter") {
      console.log("entered key");
      fetch(`${api.base}weather?q=${query}&units=metrics&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log("result:" + result);
        })
        .catch((e) => {
          console.log("ther is a error" + e);
        });
    }
  };
let convert = function (farhen) {
  return Math.round((farhen-273).toFixed(2));
}




  const dateBuilder = function () {
    return new Date().toDateString();
  };
  return (
    <div className="App">
      <div>
        <main>
          <div className="search-box">
            <input
              type="text"
              className="search-text"
              placeholder="Enter the city name..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          <div className="box">
            {(typeof weather.main !=='undefined') ?  (<div><div className="location-box">
              <div className="location-name">{weather.name} , {weather.sys.country}</div>
               <div className="location-date">{dateBuilder()}</div>
              </div>
            <div className="weather-box">
              <div className="weather-temp">{convert(weather.main.temp)} °C</div>
             {/* <div className="weather">{weather.weather[0].main}</div> */}
           
          </div></div> ) : ('')}
          </div> 
        </main>
      </div>
    </div>
  );
}

export default App;
