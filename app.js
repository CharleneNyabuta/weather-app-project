function showTemperature(response) {
  console.log(response.data);
}
let apiKey = "e7c95230e9f6b91dafc8b630c003d198";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);
