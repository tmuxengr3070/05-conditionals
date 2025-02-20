// Get references to the form and suggestion section
const weatherForm = document.getElementById('weatherForm');
const suggestionSection = document.getElementById('suggestion');

// Add an event listener to handle form submission
weatherForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  // Get the selected weather and temperature input values
  const weather = document.getElementById('weather').value;
  const temperature = document.getElementById('temperature').value;

  // Initialize a suggestion message
  let suggestion = '';

  // Determine the suggestion based on the weather
  if (weather === 'sunny') {
    suggestion = `It's sunny! 😎 Don't forget your sunglasses and sunscreen.`;
  } else if (weather === 'cloudy' || weather === 'rainy') {
    suggestion = `It's ${weather}! A light jacket might be a good idea.`;
  } else if (weather === 'snowy') {
    suggestion = `It's snowy! ❄️ Wear a warm coat and boots.`;
  } else if (weather === 'windy') {
    suggestion = `It's windy! 🌬️ A windbreaker would be useful.`;
  } else {
    suggestion = `Please select a weather condition.`;
  }

  // Check if the temperature is below 50°F
  if (temperature < 50) {
    suggestion += ` Also, it's quite cold! 🥶 Wear a warm jacket.`;
  }

  // Display the suggestion message
  suggestionSection.innerHTML = `<p>${suggestion}</p>`;
});
