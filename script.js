("Welcome to my first site!");
alert("Welcome to my first site!");
function showMessage() {
  alert("Bro, CSS + Allah ap par rehmatain nazil farmay!");
}
function changeBackground() {
  document.body.style.backgroundColor = "yellow";
}
function changeText() {
  document.querySelector("p").innerText = "Bro, Allah apko khush rakhy!";
}
function randomBackground() {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  const random = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = random;
}
let count = 0;
function increaseCounter() {
  count++;
  document.getElementById("counter").innerText = "Clicked: " + count + " times";
}
function showQuote() {
  const quotes = [
    "Coding is fun!",
    "Bro, JS chal raha hai!",
    "Practice makes perfect!",
    "Hello World forever!"
  ];
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  alert(random);
}
function addNumbers() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText = "Result: " + (n1 + n2);
}
function addTask() {
  let task = document.getElementById("task").value;
  if(task !== "") {
    let li = document.createElement("li");
    li.innerText = task;
    document.getElementById("taskList").appendChild(li);
    document.getElementById("task").value = "";
  }
}
function addTask() {
  let task = document.getElementById("task").value;
  if(task !== "") {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
    document.getElementById("task").value = "";
  }
}

function showTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((t, i) => {
    let li = document.createElement("li");
    li.innerText = (i+1) + ". " + t;
    list.appendChild(li);
  });
}
window.onload = showTasks;
let seconds = 0;
let timer;
function startTimer() {
  timer = setInterval(() => {
    seconds++;
    document.getElementById("time").innerText = "Time: " + seconds + "s";
  }, 1000);
}
function stopTimer() {
  clearInterval(timer);
}
let secret = Math.floor(Math.random() * 10) + 1;
function guessNumber() {
  let guess = document.getElementById("guess").value;
  if(guess == secret) {
    alert("Correct! 🎉");
  } else {
    alert("Try again!");
  }
  let darkModeOn = false;

function toggleDarkMode() {
    const btn = document.querySelector("button[onclick='toggleDarkMode()']");
    if (!darkModeOn) {
        document.body.classList.add("dark-mode");
        btn.textContent = "Light Mode";
        darkModeOn = true;
    } else {
        document.body.classList.remove("dark-mode");
        btn.textContent = "Dark Mode";
        darkModeOn = false;
    }
}
