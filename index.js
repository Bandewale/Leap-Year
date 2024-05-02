document.querySelector("#submit").addEventListener("click",function(){
    var year = document.getElementById("year").value;
    
    if (year.trim() != "" && !isNaN(year)){
    if(year%4===0 && year%100!=0){
            document.querySelector("h2").innerHTML = "It is a LEAP YEAR";
    
    }
    else if(year%100===0 && year%400===0){
        document.querySelector("h2").innerHTML = "It is a LEAP YEAR";
    }
    else{
        document.querySelector("h2").innerHTML = "It is NOT a Leap Year";
    }
    }
   else{
    document.querySelector("h2").innerHTML = "Invalid Input";
 }

}   

);