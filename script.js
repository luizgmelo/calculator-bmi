function calculateBMI() {
    const weight = document.querySelector("#weight").value;
    const height = document.querySelector("#height").value;
    const result = document.querySelector("#result");
    const bmi = weight / Math.pow(height, 2);
    let classification;

    if (weight == '' || height == '' ||
        isNaN(weight) || isNaN(height)) {
        return alert("Please type only numbers")
    }

    if (bmi < 18.5) {
        classification = 'under weight'
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        classification = 'normal weight'
    } else if (bmi >= 25 && bmi <= 29.9) {
        classification = 'over weight'
    } else if (bmi >= 30 && bmi <= 34.9) {
        classification = 'Obese (Class I)'
    } else if (bmi >= 35 && bmi <= 39.9) {
        classification = 'Obese (Class II)'
    } else if (bmi > 40) {
        classification = 'Obese (Class III)'
    }

    result.textContent = `Your BMI is ${bmi.toFixed(2)}
                and your Weight Status are ${classification}` 
}

buttonCalculate = document.querySelector("#buttonCalculate");
buttonCalculate.addEventListener("click", calculateBMI)
