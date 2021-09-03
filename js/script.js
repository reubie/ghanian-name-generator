// create arrays

var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akuso","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 
// creating a checking function

function check(){
    var gender = document.getElementsByName("gender");
    if(document.formDetails.value == "" || document.formDetails.year.value.length !=4 || document.formDetails.value >2500 || document.formDetails.value <=1900){
        alert( "Please input a valid year of birth!");
        document.formDetails.year.focus();
        return false;
    }
    else if( document.formDetails.month.value == "" || isNaN( document.formDetails.value) || document.formDetails.month.value.length !=1 || document.formDetails.value >12 || document.formDetails.month.value <= 0){
        alert("Incorrect month!");
        document.formDetails.month.focus();
        return false;
    }
    else if( document.formDetails.date.value == "" || isNaN(document.formDetails.date.value) || document.formDetails.date.value.length !=1 || document.formDetails.date.value >31 || document.formDetails.date.value <= 0){
        alert("Incorect date. Please Try again!");
        document.formDetails.day.focus();
        return false;
    }
    else if(genders[0].checked==false && genders[1].checked==false){
        alert("Select either male or female");
        return false;
    }
    else{
        return true;
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
        alert("You were born on "+days[0] + " and Your akan name is  " +femaleNames[0]+"!");
        }
        else if(positionDay == 2){
        alert("You were born on " +days[1] + " and Your akan name is " +femaleNames[1]+"!");
        }
        else if(positionDay == 3){
        alert("You were born on " +days[2] + " and Your akan name is " +femaleNames[2]+"!");
        }
        else if(positionDay == 4){
        alert("You were born on " +days[3] + " and Your akan name is " +femaleNames[3]+"!");
        }
        else if(positionDay == 5){
        alert("You were born on " +days[4] + " and Your akan name is " +femaleNames[4]+"!");
        }
        else if(positionDay == 6){
        alert("You were born on " +days[5] + " and Your akan name is " + femaleNames[5]+"!");
        }
        else if(positionDay == -0){
        alert("You were born on " +days[6] + " and Your akan name is " +femaleNames[6]+"!");
        }
        break;
    }
}