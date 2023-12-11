function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  
  let heightM = Height / 100;
  let BMI = weight / (heightM * heightM);

  alert(BMI);

   if(BMI<18.5){alert("underweight");}
   elseif(BMI>=18.5 && BMI(24.9)){alert("Normalweight");
  }
   elseif(BMI>=25 && BMI>=29.9){alert("overweight");
  }
    else {alert("Above obeisty")}

}
