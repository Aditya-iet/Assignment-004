
      if (!name) errors.push("Name is required.");
      if (!emailRegex.test(email)) errors.push("Invalid email format.");
      if (!phoneRegex.test(phone)) errors.push("Phone must be 10 digits.");
      if (!passRegex.test(password)) errors.push("Password must be strong.");

      document.getElementById("formErrors").innerHTML = errors.join("<br>");
      return errors.length === 0;
    }

    // E. JavaScript Objects
    function showDate() {
      document.getElementById("dateDisplay").innerText = new Date().toString();
    }
    function randomNumber() {
      document.getElementById("randomDisplay").innerText = Math.floor(Math.random() * 100);
    }

    // AJAX Example
    function getWeather() {
      fetch('https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&current_weather=true')
        .then(response => response.json())
        .then(data => {
          const temp = data.current_weather.temperature;
          document.getElementById("weather").innerText = `Current Temperature: ${temp}°C`;
        })
        .catch(err => {
          document.getElementById("weather").innerText = "Failed to fetch weather data.";
        });
    }
  </script>
</body>
</html>
