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


  }