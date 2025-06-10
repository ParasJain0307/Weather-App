const apiKey = "00235bf730164d116dc49952e3e4a2d2"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
// console.log(cityname)
async function checkwhether(city) {
    const api = apiUrl + city + `&appid=${apiKey}`;
    const response = await fetch(api);
    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        var data = await response.json(); {
            console.clear();
            document.querySelector(".city").innerHTML = data.name
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            
        const condition = data.weather[0].main;
        const iconMap = {
            Clouds: "clouds.png",
            Clear: "clear.png",
            Rain: "rain.png",
            Drizzle: "drizzle.png",
            Mist: "mist.png"
        };

        weatherIcon.src = `images/${iconMap[condition] || "clear.png"}`;
        }
        

        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
    }
}
searchbtn.addEventListener("click", () => {
    const city = searchbox.value.trim();
    if (city !== "") {
        checkwhether(city);
    }
})

searchbox.addEventListener("keypress", (e)=> {
    if (e.key === "Enter") {
        const city = searchbox.value.trim();
        if (city !== "") {
            checkwhether(city);
        }
    }
});
