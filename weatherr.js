

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
 

}
// Weather Search / Search engine

function search (city){
 let units = "metric";
let keyapi="d045ef62d06fb179edb328171922730c";
// let city=document.querySelector(".form-control").value;
let urlapi=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyapi}&units=${units}`;
console.log(urlapi);

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


search("New York");






// city serch under serch city
// function handelsubmit(event){
//     event.preventDefault();
//  let btn1Element=document.querySelector("#btn1");
// searchcity(btn1Element);


// }
// function handelsubmit (event){
//   event.preventDefault();
//   alert("hi");
//    let btn1Element=document.querySelector("#btn1");

//   searchcity(btn1Element.value);
// }

// let cityElement=document.querySelector("#btn1");
// cityElement.addEventListener("click",handelsubmit);
/////////////////////////////////////////////////////////