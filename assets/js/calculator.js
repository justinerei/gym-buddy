function button1(){
    var weight = document.getElementById("text-3").value;
    var feet = document.getElementById("text-1").value;
    var inches = document.getElementById("text-2").value;
    
    var num1 = parseFloat(weight);
    var num2 = parseInt(feet);
    var num3 = parseInt(inches);
    
    var cal1 = num2 * 12 + num3;
    var raise = Math.pow(cal1, 2);
    var cal2 = num1 / raise;
    var cal3 = cal2 * 703;
    var fiks = parseFloat(cal3).toFixed(2);
    
    var under = "You are underweight " + fiks;
    var norm = "You are normal weight " + fiks;
    var over  = "You are overweight " + fiks;
    var obe = "You are obese " + fiks;
    
    let res1 = under.fontcolor("#f5d10d");
    let res2 = norm.fontcolor("#4dc247 ");
    let res3 = over.fontcolor("#e60000");
    let res4 = obe.fontcolor("#ff6600");
    
    
    if(fiks <= 18.4){
      document.getElementById("hero-result").innerHTML = res1;
      document.getElementById("img").src = 'pik/und.png'
    }
    else if (fiks <= 24.9){
      document.getElementById("hero-result").innerHTML = res2;
      document.getElementById("img").src = 'pik/norm.png'
    }
    else if (fiks <= 29.9){
      document.getElementById("hero-result").innerHTML = res3;
      document.getElementById("img").src = 'pik/ove.png'
    }
    else if (fiks >= 30){
      document.getElementById("hero-result").innerHTML = res4;
      document.getElementById("img").src = 'pik/obe.png'
    }
    else if(weight == "" || feet == "" || inches == ""){
      alert("Please fill up the form!");
    }
    
}


function button2(){
    var centi = document.getElementById("text-4").value;
    var weight = document.getElementById("text-5").value;
    
    var nom1 = parseFloat(centi);
    var nom2 = parseFloat(weight);
  
    var sum1 = nom2 / nom1 / nom1;
    var sum2 = sum1 * 10000;
    var fikss = parseFloat(sum2).toFixed(2);
  
  var under = "You are underweight " + fikss;
  var norm = "You are normal weight " + fikss;
  var over  = "You are overweight " + fikss;
  var obe = "You are obese " + fikss;
  
  let res1 = under.fontcolor("#f5d10d");
  let res2 = norm.fontcolor("#4dc247 ");
  let res3 = over.fontcolor("#e60000");
  let res4 = obe.fontcolor("#ff6600");
  
    if(fikss <= 18.4){
      document.getElementById("hero-result").innerHTML = res1;
      document.getElementById("img").src = 'pik/und.png'
    }
    else if (fikss <= 24.9){
      document.getElementById("hero-result").innerHTML = res2;
      document.getElementById("img").src = 'pik/norm.png'
    }
    else if (fikss <= 29.9){
      document.getElementById("hero-result").innerHTML = res3;
      document.getElementById("img").src = 'pik/ove.png'
    }
    else if (fikss >= 30){
      document.getElementById("hero-result").innerHTML = res4;
      document.getElementById("img").src = 'pik/obe.png'
    }
    else if(weight == "" || centi == "" ){
      alert("Please fill up the form!");
  }
  }