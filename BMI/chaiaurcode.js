const height = document.querySelector("#height")
const weight = document.querySelector("#weight")
const results = document.querySelector("#results")

addEventListener( 'submit' , (e) =>{
  e.preventDefault();
  const heightValue = parseInt(height.value)
  const weightValue = parseInt(weight.value)

  const bmi = Math.round(weightValue / (heightValue/100) **2)

  // results.textContent = `Your BMI is ${bmi} `
  results.innerHTML = ` <span>Your BMI is ${bmi} </span>`
  console.log(results.innerHTML)

}

)