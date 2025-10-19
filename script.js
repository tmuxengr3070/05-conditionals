// Ask the user for the current weather
const weather = prompt("What is the weather like today? (sunny, rainy, cloudy, snowy)");

// Create a variable to hold the message
let message = "";

// Use if-else statements to decide what to bring
if (weather === "sunny") {
    // Suggest sunglasses for sunny weather
    message = `It's sunny! 😎 Don't forget your sunglasses.`;
} else if (weather === "rainy") {
    // Suggest an umbrella for rainy weather
    message = `It's rainy! 🌧️ Bring an umbrella.`;
} else if (weather === "cloudy") {
    // Suggest a light jacket for cloudy weather
    message = `It's cloudy! ☁️ You might want a light jacket.`;
} else if (weather === "snowy") {
    // Suggest warm clothes for snowy weather
    message = `It's snowy! ❄️ Wear warm clothes.`;
} else {
    // If the input is not recognized
    message = `I don't know that weather. 🤔 Please enter sunny, rainy, cloudy, or snowy.`;
}

// Show the message to the user
alert(message);
