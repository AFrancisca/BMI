// Define the compareBMI function
//parsefloat to change strings into digits
const compareBMI = () => {
  let BMImark = parseFloat(document.getElementById("resultMark").value);
  let BMIjohn = parseFloat(document.getElementById("resultJohn").value);

  let comparisonText;  
  if (BMImark > BMIjohn) {
    comparisonText = "Mark's BMI is greater than John's BMI";
  } else if (BMImark < BMIjohn) {
    comparisonText = "John's BMI is greater than Mark's BMI";
  } else {
    comparisonText = "Mark's BMI is the same as John's BMI";
  }

  document.getElementById("answer").textContent = comparisonText;
}


// Define the calculateBMI function
const calculateBMI = (person) => {
  let mass = document.getElementById(`m${person}`).value;
  let height = document.getElementById(`h${person}`).value;
  let bmi = (mass / (height * height)).toFixed(1);//to add only one number after the decimal point
  document.getElementById(`result${person}`).value = bmi;
}

// Attach event listeners after function
const calculateButtonMark = document.querySelector(".Mark");
calculateButtonMark.addEventListener("click", function() {
  calculateBMI("Mark");
});

const calculateButtonJohn = document.querySelector(".John");
calculateButtonJohn.addEventListener("click", function() {
  calculateBMI("John");
});

const compareButton = document.getElementById("compare");
compareButton.addEventListener("click", compareBMI);





  