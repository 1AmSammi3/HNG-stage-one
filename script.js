function updateClock() {
      let today = new Date();
      let hour = today.getHours();
      let mins = today.getMinutes();
      let secs = today.getSeconds();
      let p = document.querySelector(".time");
      let formattedHour = hour;
      let ampm = 'AM';
   
      if (formattedHour >= 12) {
         ampm = 'PM';
      }
      if (formattedHour > 12) {
         formattedHour = formattedHour - 12;
      }
      if (formattedHour === 0) {
         formattedHour = 12;
      }
   
      const formattedMinutes = String(mins).padStart(2, '0');
      const formattedSeconds = String(secs).padStart(2, '0');
   
      let finalTime = formattedHour + ":" + formattedMinutes + ":" + formattedSeconds + ' ' + ampm;
      p.innerHTML = finalTime;
   }
   
   setInterval(updateClock, 1000);
   
   
   let dateBox = document.querySelector(".date");
   
   let currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long' });
   
   dateBox.innerHTML = currentDate;