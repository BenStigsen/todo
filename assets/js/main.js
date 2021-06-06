let todolist;
let tododate;
let todoitems;
let dailyfocus;

let day = (new Date()).getDay();

function todoInit() {
  todolist   = document.getElementById("todolist");
  tododate   = document.getElementById("tododate");
  dailyfocus = document.getElementById("focus");
  
  todoitems = {
    monday: [
      [
        "study", 
        "work", 
        "walk"
      ], 
      "productivity"
    ],
    tuesday: [
      [
        "study", 
        "exercise"
      ], 
      "productivity, phyiscal health"
    ],
    wednesday: [
      [
        "meditate", 
        "read"
      ], 
      "mindfulness"
    ],
    thursday: [
      [
        "walk"
      ], 
      "life satisfaction"
    ],
    friday: [
      [
        "creative writing",
        "meditate"
      ], 
      "mindfulness"
    ],
    saturday: [
      [
        "update todo", 
        "budgeting"
      ], 
      "future"
    ],
    sunday: [
      [
        "study",
        "work", 
        "exercise", 
        "read"
      ], 
      "productivity"
    ]
  }
  
  updateDay();
}

function updateDay() {
  let weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][day];
  let items   = todoitems[weekday];
  
  todolist.innerHTML = "";
  tododate.innerHTML = '<span onclick="changeDay(-1);">&lt</span> ' + weekday + ' <span onclick="changeDay(1);">&gt</span>';
  
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < items[0].length; i++) {
    let p = document.createElement('p');
    p.innerText = items[0][i];
    
    p.addEventListener('click', function() {
      if (p.style.textDecoration === "") {
        p.style.textDecoration = "line-through";
      } else {
        p.style.textDecoration = "";
      }
    }, false);
    
    fragment.appendChild(p)
  }
  
  todolist.appendChild(fragment);
  
  dailyfocus.innerHTML = "<i> <u>focus:</u> " + items[1] + "</i>";
}

function changeDay(n) {
  day += n;
  
  if (day < 0) {day = 6;}
  if (day > 6) {day = 0;}
  
  updateDay();
}

todoInit();
