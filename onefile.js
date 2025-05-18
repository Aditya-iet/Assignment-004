<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Concepts Assignment</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .output { margin-top: 10px; }
    .error { color: red; }
  </style>
</head>
<body>
  <h1>JavaScript Concepts Assignment</h1>

  <!-- Section A: Variables, Functions, Conditions, Loops -->
  <h2>BMI Calculator</h2>
  <input id="weight" type="number" placeholder="Weight (kg)">
  <input id="height" type="number" placeholder="Height (m)">
  <button onclick="calculateBMI()">Calculate BMI</button>
  <div class="output" id="bmiResult"></div>

  <h2>User Table Generator</h2>
  <button onclick="generateUsers()">Generate Users</button>
  <table border="1" id="userTable"></table>

  <!-- Section B: Pop-up Boxes -->
  <h2>Popup Boxes</h2>
  <button onclick="submitForm()">Submit Form</button>
  <button onclick="deleteItem()">Delete Item</button>
  <button onclick="askName()">Prompt Name</button>
  <div class="output" id="userName"></div>

  <!-- Section C: Event Handling & DOM -->
  <h2>Event Handling</h2>
  <button onclick="changeText()">Change Text</button>
  <p id="text">Original text here.</p>
  <div onmouseover="hoverIn(this)" onmouseout="hoverOut(this)" style="width:100px;height:100px;background:lightgray;text-align:center;">Hover me</div>

  <!-- Section D: Form Validation -->
  <h2>Form Validation</h2>
  <form onsubmit="return validateForm()">
    Name: <input type="text" id="name"><br>
    Email: <input type="text" id="email"><br>
    Phone: <input type="text" id="phone"><br>
    Password: <input type="password" id="password"><br>
    <input type="submit" value="Register">
    <div class="error" id="formErrors"></div>
  </form>

  <!-- Section E: JS Objects & AJAX -->
  <h2>Standard Objects</h2>
  <button onclick="showDate()">Show Date</button>
  <div id="dateDisplay"></div>
  <button onclick="randomNumber()">Random Number</button>
  <div id="randomDisplay"></div>

  <h2>AJAX Request (Weather)</h2>
  <button onclick="getWeather()">Fetch Weather</button>
  <div id="weather"></div>

  <script>
    // A. BMI Calculator
    function calculateBMI() {
      const w = parseFloat(document.getElementById('weight').value);
      const h = parseFloat(document.getElementById('height').value);
      if (!w || !h) return alert("Please enter valid weight and height");
      const bmi = w / (h * h);
      document.getElementById('bmiResult').innerText = `Your BMI is ${bmi.toFixed(2)}`;
    }

    function generateUsers() {
      let table = document.getElementById("userTable");
      table.innerHTML = "<tr><th>ID</th><th>Name</th></tr>";
      for (let i = 1; i <= 5; i++) {
        let row = `<tr><td>${i}</td><td>User ${i}</td></tr>`;
        table.innerHTML += row;
      }
    }

    // B. Pop-ups
    function submitForm() { alert("Form submitted successfully!"); }
    function deleteItem() {
      if (confirm("Are you sure you want to delete this item?")) {
        alert("Item deleted.");
      }
    }
    function askName() {
      const name = prompt("Enter your name:");
      if (name) document.getElementById("userName").innerText = `Hello, ${name}!`;
    }

    // C. Event Handling
    function changeText() {
      document.getElementById("text").innerText = "Text changed successfully!";
    }
    function hoverIn(el) { el.style.background = "lightblue"; }
    function hoverOut(el) { el.style.background = "lightgray"; }

    // D. Form Validation
    function validateForm() {
      const emailRegex = /^\S+@\S+\.\S+$/;
      const phoneRegex = /^\d{10}$/;
      const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const password = document.getElementById("password").value;
      let errors = [];

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
