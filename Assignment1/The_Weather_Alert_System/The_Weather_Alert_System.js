function checkWeather() {
  let temperature = parseFloat(prompt("Enter temperature (C):"));
  let humidity = parseFloat(prompt("Enter humidity (%):"));
  let windSpeed = parseFloat(prompt("Enter wind speed (km/h):"));

  if (temperature > 35 && humidity > 70) {
    alert(" Heat Alert.");
    console.log(" Heat Alert.");
    return;
  } else if (temperature < 10 || windSpeed > 40) {
    alert(" Cold/Windy Alert.");
    console.log(" Cold/Windy Alert.");
    return;
  }

  if (temperature < 20) {
    alert("Wear Jacket.");
    console.log("Wear Jacket.");
    return;
  } else if (temperature <= 30) {
    alert("Comfortable.");
    console.log("Comfortable.");
    return;
  } else {
    alert("Stay Hydrated.");
    console.log("Stay Hydrated.");
    return;
  }
}

checkWeather();
