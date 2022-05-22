function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
function compute() {
    var principal = document.getElementById("principal").value;
    if(principal<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * (rate/100);
    let currentYear = new Date().getFullYear();
    var year= parseInt(currentYear)+parseInt(years);
    var result= parseInt(principal) + parseFloat(interest);

    document.getElementById("demo").innerHTML = "If you deposit <mark>"+principal+",</mark><br>at an interest rate of <mark>"+ rate+"%"+",</mark><br>You will receive an amount of <mark>"+result+",</mark><br>in the year <mark>"+year+"</mark>";
    return true;
    
  }