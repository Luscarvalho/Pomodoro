//Botões
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");

//Displays
document.getElementById("work_time");
document.getElementById("work_time_text");
document.getElementById("break_time");
document.getElementById("break_time_text");
//Time
let work_minutes = document.getElementById("work_minutes");
let work_Seconds = document.getElementById("work_seconds");
let break_minutes = document.getElementById("break_minutes");
let break_seconds = document.getElementById("break_seconds");

// Botão Play
start.addEventListener("click", function () {
  startTimer = setInterval(timer, 1000);
  start.style.display = "none";
  pause.style.display = "flex";
});

// Botão Pause
pause.addEventListener("click", function () {
  clearInterval(startTimer);
  start.style.display = "flex";
  pause.style.display = "none";
});

// Botão Stop
reset.addEventListener("click", function () {
  start.style.display = "flex";
  pause.style.display = "none";

  work_minutes.innerText = 25;
  work_Seconds.innerText = "00";

  break_minutes.innerText = 5;
  break_seconds.innerText = "00";

  clearInterval(startTimer);
});

// White Mode

var checkbox = document.querySelector("input[name=theme]");

// Local Storage
const checkboxColorMode = JSON.parse(localStorage.getItem("color-mode"));

if (checkboxColorMode) {
  checkbox.checked = checkboxColorMode;
  document.documentElement.setAttribute("data-theme", "light");
}

checkbox.addEventListener("change", ({ target }) => {
  target.checked
    ? document.documentElement.setAttribute("data-theme", "light")
    : document.documentElement.setAttribute("data-theme", "dark");

  localStorage.setItem("color-mode", target.checked);
});

// Função pra decrementar o tempo
function timer() {
  // POMODORO TIMER
  if (work_Seconds.innerText != 0) {
    work_Seconds.innerText--;
  } else if (work_minutes.innerText != 0 && work_Seconds.innerText == 0) {
    work_Seconds.innerText = 59;
    work_minutes.innerText--;
  }

  // BREAK TIMER
  if (work_minutes.innerText == 0 && work_Seconds.innerText == 0) {
    //Display
    work_time.style.display = "none";
    work_time_text.style.display = "none";
    break_time.style.display = "flex";
    break_time_text.style.display = "block";

    if (break_seconds.innerText != 0) {
      break_seconds.innerText--;
    } else if (break_minutes.innerText != 0 && break_seconds.innerText == 0) {
      break_seconds.innerText = 59;
      break_minutes.innerText--;
    }
  }

  if (
    work_minutes.innerText == 0 &&
    work_Seconds.innerText == 0 &&
    break_minutes.innerText == 0 &&
    break_seconds.innerText == 0
  ) {
    work_minutes.innerText = 25;
    work_Seconds.innerText = "00";

    break_minutes.innerText = 5;
    break_seconds.innerText = "00";

    //Display
    work_time.style.display = "flex";
    break_time.style.display = "none";
    break_time_text.style.display = "none";
    work_time_text.style.display = "block";
  }
}
