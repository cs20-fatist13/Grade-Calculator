document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let i1 = document.getElementById("i1").value;
  let i2 = document.getElementById("i2").value;
  let i3 = document.getElementById("i3").value;
  let i4 = document.getElementById("i4").value;
  let p1 = document.getElementById("p1").value;

  let grade = (i1 + i2 + i3 + i4 + p1) / 5;

  document.getElementById("output").innerHTML = grade.toFixed(2) + "%";
}

function getLetterGrade() {
  let grade = +document.getElementById("output").innerHTML;
  let letterGrade = +document.getElementById("output").value;

  if (grade >= 90) {
    letterGrade = "A";
  } else if (grade >= 80) {
    letterGrade = "B";
  } else if (grade >= 70) {
    letterGrade = "C";
  } else if (grade >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  document.getElementById("letterGrade").innerHTML = letterGrade;
}s
