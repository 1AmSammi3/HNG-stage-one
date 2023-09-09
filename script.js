   let dateBox = document.querySelector(".date[data-testid]");
   
   let currentDayOfTheWeek = new Date().toLocaleDateString('en-US', {weekday : 'long'});
   
   dateBox.setAttribute('data-testid', currentDayOfTheWeek);
   
   function updateTime() {
      let currentUTCTime = new Date().toUTCString();
   
      let timeBox = document.querySelector('.time[data-testid]');
      
      timeBox.setAttribute('data-testid', currentUTCTime);timeBox.setAttribute('data-testid', currentUTCTime);
   }
   
   setInterval(updateTime, 1000);

   let alter = document.querySelector("img[data-testid]");
   
   let slackDisplayImage = alter.getAttribute('data-testid');
   
   alter.setAttribute('alt', slackDisplayImage);
   
   let link = document.querySelector("a[data-testid]");
   
   let githubURL = link.getAttribute('data-testid');
   
   link.setAttribute('href', githubURL);
   