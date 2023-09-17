class Clock{
    constructor(timeDiv,alarmDiv) {
        this.timeDiv = timeDiv
        this.alarmDiv = alarmDiv
        let tim = document.querySelector(this.timeDiv)
        let t = new Date()
        let time = t.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        tim.innerHTML = time

        setInterval(this.updateTime.bind(this), 1000)
    }

    updateTime() {
        let tim = document.querySelector(this.timeDiv)
        let t = new Date()
        let time = t.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        tim.innerHTML = time
    }

}
 new Clock('#time')


AlarmRinging = false;

dropdown = document.querySelector(".setalarm");

ringtone = new Audio("./assets/alarmtune.wav"); 

setInterval(() => {
    let date = new Date();
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
    
    h = h == 0 ? h = 12 : h;
    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;  
    currentTime = h + ":" + m + ":" + s;
    if (currentTime == alarmTime)
    {
        console.log("alarm went off");
        ringtone.play();
        ringtone.loop = true;
    }
    
}, 1000);

alarmTime = "";

function setAlarm() {

    if (AlarmRinging)
    {
        alarmTime = "";
        ringtone.pause();
        dropdown.classList.remove("disable");
        setButton.innerText = "Set Alarm";
        return AlarmRinging = false;
            }

           let timeHrs = document.querySelector("#hrs").value;
           let timeMin = document.querySelector("#min").value;
           let timeSec = document.querySelector("#sec").value;

               if (timeHrs.includes("Hrs") || timeMin.includes("Min") || timeSec.includes("Sec"))
               {
                   return alert("Not a valid Time")
               }
                dropdown.classList.add("disable");
                setButton.innerText = "Clear Alarm";
    AlarmRinging = true;
           alarmTime = timeHrs + ":" + timeMin + ":" + timeSec;
           console.log(alarmTime);
}
        
