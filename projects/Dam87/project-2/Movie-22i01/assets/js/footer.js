// ПОГОДА
export function getWeather() {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=53.28245&lon=69.39692&&APPID=ac459d485ea690678b31c37c02d67868&units=metric&lang=ru"
    )
    .then((weather) => weather.json())
    .then((weather) => {
        console.log(weather.weather[0].icon);
        document.querySelector(".weather_icon").setAttribute("src","http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png" );
        document.querySelector(".temp").textContent += weather.main.temp.toString().slice(0, 4) + "°";
        document.querySelector(".humidity").textContent += weather.main.humidity + " %";
        document.querySelector(".description").textContent += weather.weather[0].description;
        document.querySelector(".wind_speed").textContent += weather.wind.speed + " м/с"; 
    })
    .catch((err) => console.error(err));
} 


//КУРС ВАЛЮТ
export function getCurrency() {
fetch(
    "https://v6.exchangerate-api.com/v6/5dbb5a87ff1222752698a259/pair/USD/KZT"
 )
    .then((currency) => currency.json())
    .then((currency) => {
       let cur = currency.conversion_rate.toString();
       document.querySelector(".currency").textContent +=
          cur.slice(0, 5) + " тенге" + "😮";
    })
    .catch((err) => console.error(err));
}

//ТЕКСТ ФУТЕРА
export function footer() {
let currentYear = new Date().getFullYear();

document.getElementById("copyright").innerHTML =
   " &copy; " + currentYear + " FrontDead";
}
