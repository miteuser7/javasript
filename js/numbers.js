function checkPrime(){
    num=getuserInput();

 flag=true;
  if(num<2){
    flag= false;
  }
  for(i=2;i<=Math.sqrt(num);i++)
    {
      if(num%i==0)
        
        flag=false;
        break;
      } 
   
    if(flag)
    {
        showResult("given number is prime: "+num+" is prime");
    }
    else{
        showResult("given number is not prime= "+num+" is prime");
    }   
    
}
function factorial(){
    num=getuserInput();
    var res=1
    for(var i=2;i<=num;i++){
     res *= i;
    }
   showResult("factorial of= "+num+" is:="+res); 
    
    
    
}

function factors(){
    num=getuserInput();
    var output = "";
    for(var i=1;i<num;i++)
        if(num%i==0)
            {
                output += i+ " ";
                
            }
    showResult("factor of= "+num+" is:="+output); 
    
}
function fibonacci(){
  var num=getuserInput();
    var output="";
    if(num==1){
        output +="0";
    }
    else if(num==2){
        output +="0 1";
        
    }
    else{
        var a=0,b=1;
        output +="0 1";
        for(var i=3;i<=num;i++){
            c=a+b;
        output +=" "+c;
        a=b;
        b=c;
    }
    }
  
  showResult("fibonacci series of= "+num+" is:="+output);   
    
    
}
function reverse(){
 num=getuserInput();
    var rev=0,r;
    while(num!=0)
        {
    r=num%10;
    rev=(rev*10)+r;
    num=Math.floor(num/10);
}
   showResult("reverse of number is "+rev);    
}
function palindrome(){
  var num=getuserInput();
    var rev=0;
   
    var num2=num;
    while(num!=0)
        {
          r=Math.floor(num%10);
    rev=(rev*10)+r;
    num=Math.floor(num/10);   
        }
   
    if(num2==rev)
       {
        showResult("it's palindrome ");    
       }
    else{
        showResult("it's not a palindrome ");
    }
       
        
        
        
   
}
function sumofdigit(){
    var num=getuserInput();
   sum=0;
    while(num!=0)
        {
            sum+=num%10;
            num=Math.floor(num/10);
        }
      showResult("sum of digit is:="+sum);
    
}
function sum(){
   var num=getuserInput();
    sum=num;
    while(num>9){
        sum=Math.floor(num/10)+num%10;
        num=sum;
    }
    showResult("sum is:="+sum); 
}

    
    
    
    
    
function getuserInput(){
 num= document.getElementById("num").value;
    return num;
}

function showResult(message){
   document.getElementById("result").innerHTML="<h4>"+message+"<h4>";  
}