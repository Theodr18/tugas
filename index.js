function refreshTime() {
  const timeDisplay = document.getElementById("date-time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);

  function showName(e){
    var firstName= document.getElementById("firstname").value;
    document.getElementById("show").innerText = firstName;        
}

function validateform() {
const nama = document.forms["formbang"]["firstname"].value
document.getElementById("firstname").innerHTML = nama;
}

