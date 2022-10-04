// ZE JAVASCRIPT

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // ZE Input
  let i1 = +document.getElementById("i1").value;
  let i2 = +document.getElementById("i2").value;
  let i3 = +document.getElementById("i3").value;
  let i4 = +document.getElementById("i4").value;
  let p1 = +document.getElementById("p1").value;

  // ZE Process
  let zegrade = (i1 + i2 + i3 + i4 + p1) / 5;
  // Ze Output
  document.getElementById("output").innerHTML = zegrade + "%";
}
