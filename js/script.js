// create arrays
var CC, YY, MM, DD, d, positionDay;
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akuso","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

 
// creating a checking function

function check() {
    var genders = document.getElementsByName("gender");
    if( document.formDetails.year.value == "" || document.formDetails.year.value.length !=4 || document.formDetails.year.value >2100 || document.formDetails.year.value <=1900) {
       alert( "Please provide a valid year of birth!" );
       document.formDetails.year.focus() ;
       return false;
    }
    else if( document.formDetails.month.value == "" || isNaN( document.formDetails.month.value ) || 
    document.formDetails.month.value.length != 2 || document.formDetails.month.value > 12  || document.formDetails.month.value <= 0){
       alert( "Please provide your month of birth! between 1 and 12" );
       document.formDetails.month.focus() ;
       return false;
    }
    else if( document.formDetails.date.value == "" || isNaN( document.formDetails.month.value ) || 
    document.formDetails.month.value.length != 2|| document.formDetails.date.value > 31 || document.formDetails.date.value <= 0) {
       alert( "Please provide a valid date that you were born in!" );
       document.formDetails.day.focus() ;
       return false;
    }
    else if(genders[0].checked==false && genders[1].checked==false ) {
        alert("You must select male or female");
        return false;
    }   
    else{
      return true ;
    }
    
  }

  
// create a function to pick gender

function getGender(){
    var genders = document.getElementsByName("gender");
    if(genders[0].checked == true){
      var gender = "male";
    }
    else if(genders[1].checked == true){
      var gender = "female";
    }
    else{
      return false;
    }

// adding a switch statement so that to compare days against name

    switch(gender){
    case "female":
        if (positionDay == 1){
        alert("Your birth date is on "+days[0] + " and Your akan name is  " +femaleNames[0]+"!");
        }
        else if(positionDay == 2){
        alert("Your birth date is on" +days[1] + " and Your akan name is " +femaleNames[1]+"!");
        }
        else if(positionDay == 3){
        alert("Your birth date is on " +days[2] + " and Your akan name is " +femaleNames[2]+"!");
        }
        else if(positionDay == 4){
        alert("Your birth date is on" +days[3] + " and Your akan name is " +femaleNames[3]+"!");
        }
        else if(positionDay == 5){
        alert("Your birth date is on " +days[4] + " and Your akan name is " +femaleNames[4]+"!");
        }
        else if(positionDay == 6){
        alert("Your birth date is on" +days[5] + " and Your akan name is " + femaleNames[5]+"!");
        }
        else if(positionDay == -0){
        alert("Your birth date is on " +days[6] + " and Your akan name is " +femaleNames[6]+"!");
        }
        break;
        case "male":
        if (positionDay == 1){
            alert("Your birth date is on " +days[0] + " and Your akan name is " +maleNames[0]+"!");
        }
        else if(positionDay == 2){
            alert("Your birth date is on "+days[1] + " and Your akan name is " +maleNames[1]+"!");
        }
        else if(positionDay == 3){
            alert("Your birth date is on  " +days[2]+ " and Your akan name is " +maleNames[2]+"!");
        }
        else if(positionDay == 4){
            alert("Your birth date is on "+days[3] +  " and Your akan name is " +maleNames[3]+"!");
        }
        else if(positionDay == 5){
            alert("Your birth date is on "+days[4] +  " and Your akan name is " +maleNames[4]+"!");
        }
        else if(positionDay == 6){
            alert("Your birth date is on  "+days[5] +  " and Your akan name is " +maleNames[5]+"!");
        }
        else if(positionDay == -0){
            alert("Your birth date is on  "+days[6] + " and Your akan name is " +maleNames[6]+"!");
        }
        break
    default:
    }
}

// create a function to calculate the day of the week

    function calculatepositionDay(){
        year = document.getElementById("year").value;
        CC = parseInt(year.substring(0,2));
        YY = parseInt(year.substring(2,4));
        MM = parseInt(document.getElementById("month").value);
        DD = parseInt(document.getElementById("date").value);
        d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
        console.log(d);
        return (Math.floor(d));
    }

// create the call fucntion for the generate button

    function generateName(){
        positionDay = calculatepositionDay();
        getGender();
    }
    