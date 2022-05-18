

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

function searchcity (event){
event.preventDefault();
 let units = "metric";
let keyapi="d045ef62d06fb179edb328171922730c";
let city=document.querySelector(".form-control").value;
let urlapi=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyapi}&units=${units}`;
console.log(urlapi);

axios.get(`${urlapi}`).then(showtemp);
}

  
 let form=document.querySelector("#search-form");
 form.addEventListener("submit",searchcity);

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
  // let iconElement=document.querySelector("#icon");
  // iconElement.setAttribute("src",`icons/${response.data.weather[0].icon}.jpg`);

}
// city serch under serch city
function handelsubmit(event){
    event.preventDefault();
 
  cityname.innerHTML="#btn1";

}

let cityElement=document.querySelector("#btn1");
cityElement.addEventListener("submit",handelsubmit);

  