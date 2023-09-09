function updateDayOfTheWeek() {
  const dayOfWeekElement = document.getElementById("currentDayOfTheWeek");
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()];
  dayOfWeekElement.textContent = `Current Day of the Week: ${currentDay}`;
}

// Function to update the current UTC time in milliseconds
function updateUTCTime() {
  const utcTimeElement = document.getElementById("currentUTCTime");
  const currentTime = new Date().getTime();
  utcTimeElement.textContent = `Current UTC Time : ${currentTime}`;
}

// Update the day of the week and UTC time initially
updateDayOfTheWeek();
updateUTCTime();

// Update the day of the week and UTC time every second
setInterval(updateDayOfTheWeek, 1000);
setInterval(updateUTCTime, 1000);
