
// DIV ID's you'll need access to 👇
// API_KEY for maps api
let API_KEY = "Insert Key Here";
let RAPID_KEY = "Insert Key Here";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
	const URL = "https://open-weather13.p.rapidapi.com/city";
	const FULL_URL = `${URL}/${city}&units=metric`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${RAPID_KEY}`,
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
  };

	return fetch(`${FULL_URL}`, options)
		.then(response => response.json())
		.then(data => data)
		.catch(err => console.error(err));
}

/**
 * 1. Make searchCity Async as some code will run later and this will cause issues.
 * 2. Pass that data as an argument into showWeatherData so that it can get the results.
 * 3. make sure to return the fetch request so we can store the data into another function.
 */
const searchCity = async () => {
	const city = document.getElementById('city-input').value;
	const data = await getWeatherData(city)
	showWeatherData(data)
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
	console.log(weatherData, 'cookie ')
	console.log(weatherData.main.temp)
	document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText = weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
}
