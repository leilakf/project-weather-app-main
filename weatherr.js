// current date and time///

let now = new Date();

let date = document.querySelector(".Day-first");
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",

]

let day = days[now.getDay()];


date.innerHTML = `${day} ${hours}:${minutes} `;

//  city temp //

function showtemp(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let span = document.querySelector(".temperature");
  span.innerHTML = `${temperature}`;

  let cityname = document.querySelector(".citty");
  cityname.innerHTML = `${response.data.name}`;

  let discription = document.querySelector(".see");
  discription.innerHTML = `${response.data.weather[0].main}`;

  let windspeed = document.querySelector("#wind");
  let cityspeed = Math.round(response.data.wind.speed);
  windspeed.innerHTML = `Wind:${cityspeed} km.h`;

  let humidity = document.querySelector("#humidity");
  let cityhumidity = response.data.main.humidity;
  humidity.innerHTML = `Humidity:${cityhumidity}%`;

  CilsiusTemperature = Math.round(response.data.main.temp);
  debugger;
  let ID = response.data.weather[0].id;
  let Icon = response.data.weather[0].icon
  setSrcIcon(ID, Icon);

}

//search for city//
function search(city) {
  debugger;
  let units = "metric";
  let keyapi = "d045ef62d06fb179edb328171922730c";
  let urlapi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyapi}&units=${units}`;
  axios.get(`${urlapi}`).then(showtemp);

}

function handleSubmit(event) {
  event.preventDefault();
  let cityinputElement = document.querySelector("#city-input");
  search(cityinputElement.value)
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);


// C & F link change////

function displayFahrenheitTemperture(event) {
  event.preventDefault();
  let FahrenheitTemperture = Math.round((CilsiusTemperature * 9 / 5) + 32);
  let temperatureElement = document.querySelector(".temperature");
  temperatureElement.innerHTML = FahrenheitTemperture;
  // remove the active class the  celsiuslink
  celsiuslink.classList.remove("active");
  fahrenheitlink.classList.add("active");



}
function displaycelsiusTemperture(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".temperature");
  temperatureElement.innerHTML = CilsiusTemperature;

  // remove the active class the  fahrenheitlink
  celsiuslink.classList.add("active");
  fahrenheitlink.classList.remove("active");

}

let CilsiusTemperature = null;

let fahrenheitlink = document.querySelector("#fahrenheit-link");
fahrenheitlink.addEventListener("click", displayFahrenheitTemperture);

let celsiuslink = document.querySelector("#celsius-link");
celsiuslink.addEventListener("click", displaycelsiusTemperture);

// city defult
search("new york");

function setSrcIcon(ID, Icon) {

  let mastericon = document.querySelector("#master-icon");
  if (ID >= 200 && ID <= 232) {
    mastericon.src = "icons/11n.gif";
  }
  if (ID >= 300 && ID <= 321) {
    mastericon.src = "icons/09d.gif";
  }
  if (ID >= 500 && ID <= 504) {
    mastericon.src = "icons/10d.gif";
  }
  if (ID >= 511 && ID <= 532) {
    mastericon.src = "icons/10n.gif";
  }
  if (ID >= 600 && ID <= 622) {
    mastericon.src = "icons/13d.gif";
  }
  if (ID >= 701 && ID <= 781) {
    mastericon.src = "icons/50d.gif";
  }
  if (ID >= 801 && ID <= 804) {
    mastericon.src = "icons/04n.gif ";
  }
  if (ID == 800 && Icon.includes("01n")) {
    mastericon.src = "icons/01n.gif";
  }
  if (ID == 800 && Icon.includes("01d")) {
    mastericon.src = "icons/01d.gif ";
  }
}





