function createCalendar(elementId, year, month) {
  let elem = document.getElementById(elementId);
  let mon = month - 1;
  let d = new Date(year, mon);
  let table = '<div class="calendar-row">';

  for (let i = 0; i < getDay(d); i++) {
    table += '<div class="calendar-day"></div>';
  }

  while (d.getMonth() === mon) {
    table += `<div class="calendar-day" onclick="addNote(this, '${d.toDateString()}')">${d.getDate()}</div>`;

    if (getDay(d) % 7 === 6) {
      table += '</div><div class="calendar-row">';
    }

    d.setDate(d.getDate() + 1);
  }

  if (getDay(d) !== 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<div class="calendar-day"></div>';
    }
  }

  table += "</div>";
  elem.innerHTML = table;
}

function getDay(date) {
  let day = date.getDay();
  if (day === 0) day = 7;
  return day - 1;
}

function addNote(elem, date) {
  let userInput = prompt("Add a note for " + date, "");
  if (userInput) {
    let notes = userInput
      .split(" ")
      .map((note) => `<li>${note}</li>`)
      .join("");
    elem.innerHTML = `${date.split(" ")[2]}<ul class='note'>${notes}</ul>`;
  }
}

// Initialize calendar with current month and year
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;
createCalendar("calendar", currentYear, currentMonth);

// Populate month and year dropdowns
for (let i = 1; i <= 12; i++) {
  let option = new Option(i, i);
  document.getElementById("monthSelect").add(option);
}
document.getElementById("monthSelect").value = currentMonth;

for (let i = currentYear - 10; i <= currentYear + 10; i++) {
  let option = new Option(i, i);
  document.getElementById("yearSelect").add(option);
}
document.getElementById("yearSelect").value = currentYear;

// Add event listeners for month and year selection
document.getElementById("monthSelect").addEventListener("change", function () {
  createCalendar("calendar", currentYear, this.value);
});
document.getElementById("yearSelect").addEventListener("change", function () {
  createCalendar("calendar", this.value, currentMonth);
});

// Export to PDF functionality
document.getElementById("exportPdf").addEventListener("click", function () {
  // Implement export to PDF logic here
  alert("Export to PDF feature needs to be implemented");
});
