function CheckNumber(){
    var num=document.getElementById("num").value;

var message;
if(num%2==0){
    message="number:"+num+" is even";
    
}
else
    {
    message="number:"+num+" is odd";
    
}
document.getElementById("res").innerHTML=message;
}
function bilclc(){
    var units=document.getElementById("units").value;
    var minamount=0;
    var  amount=0;
var totalamount=0;
    if(units>=0 && units<100){
        amount=units*5;
    }
    else if(units>=100 && units<500){
        amount=units*6;
    }
    else{
        amount=units*10;
    }
    totalamount=minamount+amount;
    message="total bill amount is:"+totalamount;
      document.getElementById("ans").innerHTML=+message;
}
   
