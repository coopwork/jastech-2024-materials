ymaps.ready(init);


function init(){
    var myMap = new ymaps.Map("map", {
            center: [53.2818492739004,69.38390624015832],
            zoom: 7,
            controls: [],
        },{
            minZoom: 5,
            maxZoom: 23  
        });
        myMap.options.set('restrictMapArea', [
            [40.5802, 46.4665], 
            [55.4413, 87.3151]  
        ]);

        myMap.copyrights.add('&nbsp;');

      
        const input = document.getElementById("city-input");
        const searchBtn = document.getElementById("search-btn");
        const zoomInButton = document.getElementById("zoom-in");
        const zoomOutButton = document.getElementById("zoom-out");

        searchBtn.addEventListener("click", () => {
            const cityName = input.value.trim();
            if (!cityName) {
                alert("Введите название города!");
                return;
            }
            ymaps.geocode(cityName).then(result => {
                const firstGeoObject = result.geoObjects.get(0);
                if (firstGeoObject) {
                    const coords = firstGeoObject.geometry.getCoordinates();
                    const bounds = firstGeoObject.properties.get('boundedBy');

                    myMap.setBounds(bounds, {
                        checkZoomRange: true
                    });

                    myMap.geoObjects.removeAll(); 
                    myMap.geoObjects.add(new ymaps.Placemark(coords, {
                        balloonContent: `<strong>${cityName}</strong>`
                    }));
                } else {
                    alert("Город не найден. Проверьте правильность написания.");
                }
            }).catch(error => {
                console.error("Ошибка геокодирования:", error);
            });
        });

        zoomInButton.addEventListener("click", () => {
            let currentZoom = myMap.getZoom();
            myMap.setZoom(currentZoom + 1, { duration: 300 }); // Анимация
        });

        zoomOutButton.addEventListener("click", () => {
            let currentZoom = myMap.getZoom();
            myMap.setZoom(currentZoom - 1, { duration: 300 }); // Анимация
        });
  let addedCitiesCoords = [];

  function getWeatherData(cityCoords, cityName) {
    const weatherIcons = {
      "01d": "./assets/icons/01d.svg",
      "01n": "./assets/icons/01n.svg",
      "02d": "./assets/icons/02d.svg",
      "02n": "./assets/icons/02n.svg",
      "03d": "./assets/icons/03.svg",
      "03n": "./assets/icons/03.svg",
      "04d": "./assets/icons/04d.svg",
      "04n": "./assets/icons/04n.svg",
      "09d": "./assets/icons/09d.svg",
      "09n": "./assets/icons/09n.svg",
      "10d": "./assets/icons/10d.svg",
      "10n": "./assets/icons/10n.svg",
      "11d": "./assets/icons/11d.svg",
      "11n": "./assets/icons/11n.svg",
      "13d": "./assets/icons/13d.svg",
      "13n": "./assets/icons/13n.svg",
      "50d": "./assets/icons/50d.svg",
      "50n": "./assets/icons/50n.svg",
    };
    
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${cityCoords[0]}&lon=${cityCoords[1]}&units=metric&lang=ru&appid=077da3372a473e1ca741c926148d6387`
    )
      .then((response) => response.json())
      .then((weatherData) => {
        const temperature = Math.round(weatherData.main.temp);
        const feelsLike = Math.round(weatherData.main.feels_like);
        const weatherDescription = weatherData.weather[0].description;
        const weatherIconCode = weatherData.weather[0].icon;
        const windSpeed = weatherData.wind.speed;
        const humidity = weatherData.main.humidity;
        const pressure = weatherData.main.pressure;
        const weathericonPath  = weatherIcons[weatherIconCode];

        const placemark = new ymaps.Placemark(
          cityCoords,
          {
            iconCaption: `${cityName}: ${temperature}°C`,
          },
          {
            preset: "islands#blueCircleIcon",
            iconCaptionMaxWidth: "200",
          }
        );

        placemark.events.add("click", () => {
          const sidebar = document.getElementById("sidebar");
          const cityNameElement = document.getElementById("city-name");
          const cityInfoElement = document.getElementById("city-info");

          cityNameElement.textContent = cityName;
          cityInfoElement.innerHTML = `
            <div class="weather-current">
              <img src="${weathericonPath}" alt="Иконка погоды" class="weather-icon">
              <div class="weather-details">
                <div>
                  <img src="./assets/icons/thermometer-celsius.svg" alt="Температура" class="inline-icon">
                  <strong>${temperature}°C</strong> (Ощущается как ${feelsLike}°C)
                </div>
                <div>
                  <img src="${weathericonPath}" alt="Описание погоды" class="inline-icon">
                  ${weatherDescription}
                </div>
                <div>
                  <img src="./assets/icons/windsock.svg" alt="Скорость ветра" class="inline-icon">
                  Ветер: ${windSpeed} м/с
                </div>
                <div>
                  <img src="./assets/icons/humidity.svg" alt="Влажность" class="inline-icon">
                  Влажность: ${humidity}%
                </div>
                <div>
                  <img src="./assets/icons/barometer.svg" alt="Давление" class="inline-icon">
                  Давление: ${pressure} гПа
                </div>
              </div>
            </div>
          `;


          sidebar.classList.add("open");

          getForecastData(cityCoords);
        });

        myMap.geoObjects.add(placemark);
        addedCitiesCoords.push(cityCoords);
      })
      .catch((error) =>
        console.error("Ошибка получения данных о погоде:", error)
      );
  }

  function getForecastData(cityCoords) {
    const forecastIcons = {
      "01d": "./assets/icons/01d.svg",
      "01n": "./assets/icons/01n.svg",
      "02d": "./assets/icons/02d.svg",
      "02n": "./assets/icons/02n.svg",
      "03d": "./assets/icons/03.svg",
      "03n": "./assets/icons/03.svg",
      "04d": "./assets/icons/04d.svg",
      "04n": "./assets/icons/04n.svg",
      "09d": "./assets/icons/09d.svg",
      "09n": "./assets/icons/09n.svg",
      "10d": "./assets/icons/10d.svg",
      "10n": "./assets/icons/10n.svg",
      "11d": "./assets/icons/11d.svg",
      "11n": "./assets/icons/11n.svg",
      "13d": "./assets/icons/13d.svg",
      "13n": "./assets/icons/13n.svg",
      "50d": "./assets/icons/50d.svg",
      "50n": "./assets/icons/50n.svg",
    };
  
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${cityCoords[0]}&lon=${cityCoords[1]}&units=metric&lang=ru&appid=077da3372a473e1ca741c926148d6387`
    )
      .then((response) => response.json())
      .then((forecastData) => {
        const forecastContainer = document.getElementById("forecast-container");
        forecastContainer.innerHTML = "";
  
        const dailyForecast = {};
        forecastData.list.forEach((entry) => {
          const dateTime = new Date(entry.dt * 1000);
          const date = dateTime.toLocaleDateString("ru-RU", {
            weekday: "long",
            day: "numeric",
            month: "long",
          });
          if (!dailyForecast[date]) dailyForecast[date] = [];
          dailyForecast[date].push(entry);
        });
  
        Object.keys(dailyForecast).forEach((date) => {
          const dailyEntries = dailyForecast[date];
          const dayBlock = document.createElement("div");
          dayBlock.className = "forecast-day";
  
          const dayTitle = document.createElement("h3");
          dayTitle.textContent = date;
          dayTitle.style.marginBottom = "10px";
          dayBlock.appendChild(dayTitle);
  
          dailyEntries.forEach((entry) => {
            const dateTime = new Date(entry.dt * 1000);
            const formattedTime = dateTime.toLocaleTimeString("ru-RU", {
              hour: "2-digit",
              minute: "2-digit",
            });
            const temperature = Math.round(entry.main.temp);
            const feelsLike = Math.round(entry.main.feels_like);
            const description = entry.weather[0].description;
            const weatherIconCode = entry.weather[0].icon;
            const weathericonPath = forecastIcons[weatherIconCode];
  
            const forecastElement = document.createElement("div");
            forecastElement.className = "forecast-entry";
            forecastElement.innerHTML = `
              <div class="forecast-timestamp">${formattedTime}</div>
              <div class="forecast-data">
                <img src="${weathericonPath}" alt="Иконка погоды" class="weather-icon-forecast">
              </div>
                <div class="forecast-details">
                  <strong>${temperature}°C</strong> (Ощущается как ${feelsLike}°C)<br>
                  ${description}
              </div>
            `;
            dayBlock.appendChild(forecastElement);
          });
  
          forecastContainer.appendChild(dayBlock);
        });
      })
      .catch((error) =>
        console.error("Ошибка получения данных прогноза:", error)
      );
  }
  

  function getCitiesData() {
    const zoomLevel = myMap.getZoom();
    const bounds = myMap.getBounds();
    const southwest = bounds[0];
    const northeast = bounds[1];

    fetch(
      `http://api.geonames.org/searchJSON?country=KZ&featureClass=P&maxRows=50&lang=ru&username=nagima&south=${southwest[0]}&north=${northeast[0]}&west=${southwest[1]}&east=${northeast[1]}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.geonames && data.geonames.length > 0) {
          data.geonames.forEach((city) => {
            const cityCoords = [city.lat, city.lng];
            const population = city.population || 0;

            // Фильтрация на основе зума
            if (
              (zoomLevel <= 6 && population > 100000) || // Крупные города
              (zoomLevel > 6 && zoomLevel <= 10 && population > 10000) || // Средние города
              (zoomLevel > 10) // Все города
            ) {
              if (
                !addedCitiesCoords.some(
                  (coord) =>
                    coord[0] === cityCoords[0] && coord[1] === cityCoords[1]
                )
              ) {
                getWeatherData(cityCoords, city.name);
              }
            }
          });
        } else {
          console.log("Нет данных о городах в данной области");
        }
      })
      .catch((error) =>
        console.error("Ошибка получения данных о городах:", error)
      );
  }

  document.getElementById("close-sidebar").addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("open");
  });

  myMap.events.add("zoomchange", function () {
    myMap.geoObjects.removeAll();
    addedCitiesCoords = [];
    getCitiesData();
  });

  myMap.events.add("boundschange", function () {
    myMap.geoObjects.removeAll();
    addedCitiesCoords = [];
    getCitiesData();
  });

  getCitiesData();
}
