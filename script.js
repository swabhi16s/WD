function updateProgressBar(percentage){
    const progressBar = document.getElementById('myProgressBar');
      progressBar.style.width = `${percentage}%`;
      progressBar.textContent = `${percentage.toFixed(2)}%`;
    }
    function updateProgressEverySecond() {
        
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const isLeapYear = (currentYear % 4 === 0 && currentYear % 100 !== 0) || (currentYear % 400 === 0);
        let totalSecondsInYear;
          if(isLeapYear){
            totalSecondsInYear= 31622400;
        } else {
          totalSecondsInYear = 31536000;
        }
          
        const secondsPassed = Math.floor((currentDate - new Date(currentYear, 0, 1)) / 1000);
       const percentageOfYearPassed = (secondsPassed / totalSecondsInYear) * 100;
      
        updateProgressBar(percentageOfYearPassed);
    }

    
    

    function startProgress(){
    setInterval(updateProgressEverySecond, 1000);
    }
  