

// //day and time

let now = new Date();

let date=document.querySelector(".Day-first");
let hours=now.getHours();
let minutes=now.getMinutes();

let days=[
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  
]

let day=days[now.getDay()];


date.innerHTML=`${day} ${hours}:${minutes} `;



// temprature weather//

//update city

function showtemp(response){
 
  console.log(response.data)
  let temperature=Math.round(response.data.main.temp);
  let span=document.querySelector(".temperature");
  span.innerHTML=`${temperature}`;

  let cityname=document.querySelector(".citty");
  cityname.innerHTML=`${response.data.name}`;

  let discription=document.querySelector(".see");
  discription.innerHTML=`${response.data.weather[0].main }`;

  let windspeed=document.querySelector("#wind");
  let cityspeed=Math.round(response.data.wind.speed);
  windspeed.innerHTML=`Wind:${cityspeed} km.h`;

  let humidity=document.querySelector("#humidity");
  let cityhumidity=response.data.main.humidity;
  humidity.innerHTML=`Humidity:${cityhumidity}%`;

  CilsiusTemperature=Math.round (response.data.main.temp);
debugger;
let iconElement= response.data.weather[0].id;
let mastericon=document.querySelector("#master-icon");
if (iconElement>=200 && iconElement<=232){
  mastericon.src="icons/11n.gif";
}
if (iconElement>=300 && iconElement<=321){
  mastericon.src="icons/09d.gif";
}
if (iconElement>=500 && iconElement<=531){
  mastericon.src="icons/09n.gif"; 
}
if (iconElement>=600 && iconElement<=622){
  mastericon.src="icons/13d.gif"; 
}
if (iconElement>=701 && iconElement<=781){
  mastericon.src="icons/50d.gif";
}
if (iconElement>=800 && iconElement<801){
  mastericon.src="icons/04d.gif ";
}
if (iconElement>=801 && iconElement<=804){
  mastericon.src="icons/04n.gif ";
}
else{
  alert("your search is uncorect");
}
}
// Weather Search / Search engine

function search (city){
  debugger;
 let units = "metric";
let keyapi="d045ef62d06fb179edb328171922730c";
let urlapi=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyapi}&units=${units}`;


axios.get(`${urlapi}`).then(showtemp);

}


function handleSubmit(event){
  event.preventDefault();
  let cityinputElement=document.querySelector("#city-input");
    
  search(cityinputElement.value)
}

function displayFahrenheitTemperture(event){
event.preventDefault();


let FahrenheitTemperture=Math.round((CilsiusTemperature * 9/5) + 32 );

let temperatureElement=document.querySelector(".temperature");
temperatureElement.innerHTML=FahrenheitTemperture;
// remove the active class the  celsiuslink
celsiuslink.classList.remove("active");
fahrenheitlink.classList.add("active");



}
function displaycelsiusTemperture(event){
event.preventDefault();
let temperatureElement=document.querySelector(".temperature");
temperatureElement.innerHTML=CilsiusTemperature;

// remove the active class the  fahrenheitlink
celsiuslink.classList.add("active");
fahrenheitlink.classList.remove("active");

}
 
 
let CilsiusTemperature=null;

let form=document.querySelector("#search-form");
form.addEventListener("submit",handleSubmit);


let fahrenheitlink=document.querySelector("#fahrenheit-link");
fahrenheitlink.addEventListener("click",displayFahrenheitTemperture);

let celsiuslink=document.querySelector("#celsius-link");
celsiuslink.addEventListener("click",displaycelsiusTemperture);

search("new york");






