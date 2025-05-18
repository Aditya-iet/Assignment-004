function chatbotResponse() {
 let input = document.getElementById("chatInput").value.toLowerCase();
 let response = "I don't understand.";
 if (input.includes("hello")) response = "Hello! How can I help?";
 else if (input.includes("weather")) response = "Try clicking the 'Get Weather' button!";

 document.getElementById("chatResponse").innerText = response;
}
