// HTML ELEMENTS IN JS_

const form = document.querySelector("form");
const input = document.querySelector("input");
const div = document.querySelector("#div");

let weather = [];

form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  axios(
    `https://api.weatherapi.com/v1/current.json?key=e3e98122324b454b92f44333241406&q=${input.value}&aqi=no`
  )
    .then((response) => {
      input.value = "";
      console.log(response.data);
      weather = div.innerHTML += `
        <div class="card text-bg-success mb-3" style="width: 18rem; margin: 10px">
        <div class="card-header"><h2>${response.data.location.name}</h2></div>
        <div class="card-body">
        <h6 class="card-title">${response.data.location.localtime}</h6>
        <img src="${response.data.current.condition.icon}" alt="Weather-icon">
        <h4 class="card-text">Temperature: ${response.data.current.temp_c}°C</h4>
        <p class="card-text">Feels like: ${response.data.current.condition.text}</p>
        `;
    })

    .catch((error) => {
      console.log(error);
      alert("This city is not available");
    });
});
