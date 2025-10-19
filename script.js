// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Get the form and suggestion section from the HTML
    const weatherForm = document.getElementById("weatherForm");
    const suggestionSection = document.getElementById("suggestion");

    // Add an event listener for the form submission
    weatherForm.addEventListener("submit", function (event) {
        // Prevent the form from refreshing the page
        event.preventDefault();

        // Get the selected weather and temperature from the form
        const weather = document.getElementById("weather").value;
        const temperature = document.getElementById("temperature").value;

        // Create a variable to hold the message
        let message = "";

        // Check if weather is cloudy or rainy
        if (weather === "cloudy" || weather === "rainy") {
            // Suggest a light jacket for cloudy or rainy weather
            message = `It's ${weather}! A light jacket might be a good idea.`;
        } else if (weather === "sunny") {
            // Suggest sunglasses for sunny weather
            message = `It's sunny! 😎 Don't forget your sunglasses.`;
        } else if (weather === "snowy") {
            // Suggest warm clothes for snowy weather
            message = `It's snowy! ❄️ Wear warm clothes.`;
        } else if (weather === "windy") {
            // Suggest a windbreaker for windy weather
            message = `It's windy! 💨 A windbreaker is a good idea.`;
        } else {
            // If the input is not recognized
            message = `I don't know that weather. 🤔 Please select a weather type.`;
        }

        // Add a suggestion based on the temperature, if provided
        if (temperature) {
            // Convert the temperature to a number
            const tempNum = Number(temperature);

            // Suggest a warm jacket if temperature is below 50°F
            if (tempNum < 50) {
                message += ` It's chilly! 🧥 Wear a warm jacket.`;
            } else if (tempNum <= 40) {
                message += ` It's pretty cold! 🧤 Dress warmly.`;
            } else if (tempNum >= 85) {
                message += ` It's hot outside! 🥤 Stay hydrated.`;
            }
        }

        // Show the message in the suggestion section
        suggestionSection.innerHTML = `<p>${message}</p>`;
    });
});
