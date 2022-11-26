//data Type

//var
var variableName = 'test var';
//let
let variavblename = 'test let';
//const string ',"", ``
const s ='hello String const';
const name ='testjone';
const hello= `hello ${2+2} ,welcome`
// const int
const int = 22;
const int1 = 333.000000343;
// boolean 
const  isname =true
//object 
const person ={
    name: 'JONE',
    age : 23
}
//Array
const arr =[1, 2, 3, 4, 5];
//date
const date= new Date();

//function 

// normal function creation
function sum (a , b){
    console.log(a+b);
}

//arrow function
let mult = (a,b) =>console.log(a*b);
console.log();



var checkcount=(a)=>{
    for(let i=0;i<a.length-1;i++)
    {
        console.log(a.charAt(i));
      if(a.charAt(i)!=a.charAt(i+1)) return false;
    }
    return true;
  }
  function nextNumb(val) { 
    let check =(a)=>
    {
        a= new String(a);
      for(let i=0;i<a.length-1;i++)
      {
        if(a.charAt(i)== a.charAt(i+1)) return false;
      }
      return true;
    }
    var nextNumber;
      /* your code here*/
    if(val%3==0 && val%2!=0 && check(val)){
      nextNumber= val;
    }
    else return nextNumb(val+1);
    
      return nextNumber; }
      let a = 99;
      a= new String(a);
      console.log(a.charAt(0)== a.charAt(1));
    console.log(nextNumb(99));