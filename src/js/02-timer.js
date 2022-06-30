// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
const startBtn = document.querySelector('[data-start]');
const stringDay = document.querySelector('[data-days]');
const stringHourse = document.querySelector('[data-hours]');
const stringMinutes = document.querySelector('[data-minutes]');
const stringSecond = document.querySelector('[data-seconds]');


startBtn.addEventListener('click', onStartTime)
startBtn.setAttribute('disabled', 'disabled')

let time = null;
let intervalTime = null

function onStartTime(){
        let startDate = Date.now();
    
        intervalTime = setInterval(() => {
        let startDate = Date.now();
        let seconds = time - startDate
        
        convertMs(seconds);
        getUpdateContent(convertMs(seconds));
    }, 1000);
}


// const date = Date.now();
// console.log(date);

const timeResult = flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(selectedDates[0] <= new Date()){
            window.alert("Please choose a date in the future")
            return 
           
        }else{
            console.log("Все норм")
            startBtn.removeAttribute("disabled")
        }
      time = selectedDates[0]
      console.log(selectedDates[0]);
    },
  });


  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = pud(Math.floor(ms / day));
    // Remaining hours
    const hours = pud(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pud(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pud(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  function pud(value){
    return String(value).padStart(2, '0')
}
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function getUpdateContent(value){
    let { days, hours, minutes, seconds } = value
    stringSecond.textContent = seconds
    stringMinutes.textContent = minutes
    stringHourse.textContent = hours
    stringDay.textContent = days
   
   
}