window.onload = function () {  
    
    $("#heading span").text(timeLine);
    
    let siteColor = [
        "#ffff00",
        "#ff5a00",
        "#9600ff",
        "#00ff00",
        "#0000ff",
        "#00ffff",
        "#ff00ff",
        "#ff0000",
    ]; 
        let randomColor = Math.floor(Math.random() * siteColor.length);
        let selectedColor = siteColor[randomColor];
        console.log(selectedColor);
     $("body").css("background-color", selectedColor);
}

function getTimeLine () {
      var today = new Date();
      var day = today.getDay();
      var month = today.getMonth();
      var date = today.getDate();
      var year = today.getUTCFullYear();
      var hour = today.getHours();
      var min = today.getMinutes();
      let dayString = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];
      let monthString = [
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'November', 
        'December'
      ];
      let hourString = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
      if (min < 10 && hour < 12) {
        timeLine = "It’s " + dayString[day] + ", " + monthString[month] + " " + date + ", " + year + ", " + hourString[hour] + ":0" + min + "am, ";
      } else if (min > 9 && hour < 12) {
        timeLine = "It’s " + dayString[day] + ", " + monthString[month] + " " + date + ", " + year + ", " + hourString[hour] + ":" + min + "am, ";
      } else if (min < 10 && hour > 11) {
        timeLine = "It’s " + dayString[day] + ", " + monthString[month] + " " + date + ", " + year + ", " + hourString[hour] + ":0" + min + "pm, ";
      } else if (min > 9 && hour > 11) {
        timeLine = "It’s " + dayString[day] + ", " + monthString[month] + " " + date + ", " + year + ", " + hourString[hour] + ":" + min + "pm, ";
      }
    console.log("hi");
    $("#heading span").text(timeLine);
    
}

    getTimeLine();
    setInterval (getTimeLine, 20000);

    