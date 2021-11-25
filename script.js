let fetchWeather = (city) => {
  const apiKey = "f3051c89105ca326ac7497f3b29fd37c";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => displayWeather(data));
};

let displayWeather = (data) => {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  console.log(name, description, temp, humidity, speed);
  document.querySelector(".city").innerHTML = `Weather in ${name}`;
  document.querySelector(
    ".icon"
  ).src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  document.querySelector(".description").innerHTML = description;
  document.querySelector(".temp").innerHTML = `${temp}°F`;
  document.querySelector(".humidity").innerHTML = `Humidity: ${humidity}%`;
  document.querySelector(".wind").innerHTML = `Wind Speed: ${speed} Km/h`;
  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + name + "')";
};
let searchWeather = () => {
  fetchWeather(document.querySelector(".search-bar").value);
};

document.querySelector(".search button").addEventListener("click", function () {
  searchWeather();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      searchWeather();
    }
  });

fetchWeather("Delhi");
