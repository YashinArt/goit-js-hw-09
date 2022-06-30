const refs = {
    body: document.querySelector("body"),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}
refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);
let interval = null;
let isActiv = false;
function onStartBtn() {
    if (isActiv){
        return;
    };
    isActiv = true;
    interval = setInterval(()=>{
        refs.body.style.backgroundColor = getRandomHexColor()
        }, 1000);
        // refs.startBtn.setAttribute("disabled", "disabled");
        refs.stopBtn.removeAttribute("disabled")
        
  }
  function onStopBtn() {
    // refs.startBtn.removeAttribute("disabled");
    // refs.stopBtn.setAttribute("disabled", "disabled");
    clearInterval(interval);
    isActiv = false;
    
  }

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }