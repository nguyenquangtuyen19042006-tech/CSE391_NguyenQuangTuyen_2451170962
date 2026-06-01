const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const loading = document.getElementById("loading");
const error = document.getElementById("error");
const weather = document.getElementById("weather");

const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const desc = document.getElementById("desc");
const icon = document.getElementById("icon");

const historyList = document.getElementById("history");

let history = JSON.parse(localStorage.getItem("history")) || [];

renderHistory();

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {

    loading.classList.remove("hidden");
    weather.classList.add("hidden");
    error.classList.add("hidden");

    try {

        const response = await fetch(
            `https://wttr.in/${city}?format=j1`
        );
        await new Promise(resolve => setTimeout(resolve, 3000));

    
        if (!response.ok) {
            throw new Error("Không tìm thấy thành phố");
        }

        const data = await response.json();

        cityName.textContent = city;

        temp.textContent =
            data.current_condition[0].temp_C;

        humidity.textContent =
            data.current_condition[0].humidity;

        desc.textContent =
            data.current_condition[0]
            .weatherDesc[0].value;

        icon.src =
            data.current_condition[0]
            .weatherIconUrl[0].value;

        weather.classList.remove("hidden");

        saveHistory(city);

    } catch (err) {

        error.textContent = err.message;
        error.classList.remove("hidden");

    } finally {

        loading.classList.add("hidden");

    }
}

function saveHistory(city) {

    history = history.filter(
        item => item.toLowerCase() !== city.toLowerCase()
    );

    history.unshift(city);

    history = history.slice(0, 5);

    localStorage.setItem(
        "history",
        JSON.stringify(history)
    );

    renderHistory();
}

function renderHistory() {

    historyList.innerHTML = "";

    history.forEach(city => {

        const li = document.createElement("li");

        li.textContent = city;

        li.addEventListener("click", () => {
            getWeather(city);
        });

        historyList.appendChild(li);
    });
}