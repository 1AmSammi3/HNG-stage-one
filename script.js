function getCurrentUTCTimeInMilliseconds() {
  const utcTimeMilliseconds = new Date().getTime();
  return utcTimeMilliseconds;
}

function displayCurrentUTCTime() {
  const utcTimeElement = document.getElementById("utc-time");
  const currentUTCTime = getCurrentUTCTimeInMilliseconds();
  document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${getCurrentUTCTimeInMilliseconds()}ms`;
}

// Update the time initially
displayCurrentUTCTime();

// Update the time every second (1000 milliseconds)
setInterval(displayCurrentUTCTime, 1000);
   
   let dateBox = document.querySelector('[data-testid="currentDayOfTheWeek"]');
   
   let currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long' });
   
   dateBox.innerHTML = currentDate;