function calculateBMI() {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultDiv = document.getElementById('result');
  
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // Convert height to meters
  
    if (isNaN(weight) || isNaN(height) || height <= 0) {
      resultDiv.innerText = 'Please enter valid values for weight and height.';
      return;
    }
  
    const bmi = weight / (height * height);
    const bmiRounded = bmi.toFixed(2);
  
    let interpretation;
    if (bmi < 18.5) {
      interpretation = 'Underweight';
    } else if (bmi < 24.9) {
      interpretation = 'Normal weight';
    } else if (bmi < 29.9) {
      interpretation = 'Overweight';
    } else {
      interpretation = 'Obese';
    }
  
    resultDiv.innerText = `Your BMI: ${bmiRounded} - ${interpretation}`;
  }
  