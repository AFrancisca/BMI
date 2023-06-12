const calculateButtonMark = document.querySelector(".Mark button");
calculateButtonMark.addEventListener("click", function() {
  calculateBMI("Mark");
});

const calculateButtonJohn = document.querySelector(".John button");
calculateButtonJohn.addEventListener("click", function() {
  calculateBMI("John");
});

const compareButton = document.getElementById("compare");
compareButton.addEventListener("click", compareBMI);

//calculating BMI of each person
function calculateBMI(person) {
  var m = document.getElementById(`m${person}`).value;
  var h = document.getElementById(`h${person}`).value;
  var bmi = (m / (h * h)).toFixed(1);
  document.getElementById(`result${person}`).value = bmi;
}
//compare bmis
//parsefloat to convert strings to digits
function compareBMI() {
  var BMImark = parseFloat(document.getElementById("resultMark").value);
  var BMIjohn = parseFloat(document.getElementById("resultJohn").value);

  var comparisonText = "Mark's BMI is the same as John's BMI";
  if (BMImark > BMIjohn) {
    comparisonText = "Mark's BMI is greater than John's BMI";
  } else if (BMImark < BMIjohn) {
    comparisonText = "John's BMI is greater than Mark's BMI";
  }

  document.getElementById("answer").textContent = comparisonText;
}

  

  