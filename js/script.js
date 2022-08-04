/*const usen = "Usen-ita Usen Asanga ";
var _usen = "Usen-ita Usen Asanga ";
var $usen = "Usen-ita Usen Asanga ";
var usenIta = "Usen-ita Usen Asanga ";
var UsenIta = "Usen-ita Usen Asanga ";
let usen = "Usen-ita Usen Asanga ";
usen = "Usen-it Usen Asanga ";
const usen = "Usen-ita Usen Asanga ";
usen = "Usen-ita Usen Asanga ";
document.write(usen)*/

//javaScript Data types Tutorial
/*var x = 23
x="false"
x=undefined
x=['html', 'php', 23]
x={
    name:"adwan minj",
    age:329
}
document.write("the datatype of *"+ x + "* is a " )
document.write("<br>")
document.write(typeof x)*/

//javaScript Arithmetic Operators Tutorial
/*var x = 2;
var y = 3;
var z = x-y;//subtraction
var z = x*y;//multiplication
var z = x/y;//division
var z = x%y;//modulus
var z = x**y;//exponential/to the power of
document.write((x+y)*2);
document.write("<br>");
x--
document.write(x+y);*/

//JavaScript Assignment Operators
/*var x = 10
var y = 4
//x=x+y;
//x-=y
//x*=y
//x/=y
//x%=y
//x**=y
document.write(x)*/

//JavaScript with Google Chrome Console Part 1
/*var x = 34
document.write(x)
console.warn("something went wrong")
console.clear()*/

//JavaScript with Google Chrome Console Part 2
/*var x = 34
console.time("test")
document.write(x);
console.error("Something went wrong!")
console.warn("This is just a warning!")
console.timeEnd("test")*/

//JavaScript Comparison Operators Tutorial
/*var x = 10
var y = 10
//console.log(x === y)
//console.log(6 !== "6")
//console.log(30 >=9)
console.log(9 <= 9)*/

//Javascript If Statement Tutorial
/*var a = 3
var b = "3"
if(a===b){
    console.log("Hello World");
}*/

//JavaScript Logical Operators Tutorial
/*var age = 20;
console.log(!(age >= 145));*/

//JavaScript if ELse Statement Tutorial
/*var Name = "Usen-ita";
var gender = "Female";
if(gender == "Male"){
    console.log("Hello mr. " + Name + ". We serve spirits, beer, and martinis. Which drink would you like? ;)");
}else{
    console.log("Hello miss. Would you like a complimentary drink?");
}*/

//JavaScript If Else If Statement Tutorial
/*var per = 1002
if(per >= 80 && per <= 100){
        document.write("you are in merit");
}else if(per >= 60 && per < 80){
    document.write("you are in Ist Division");
}else if(per >= 45 && per < 60){
    document.write("you are in IInd Division");
}else if(per >= 33 && per < 45){
    document.write("you are in IIIrd Division");
}else if(per < 33){
    document.write("you are Fail")
}else{
    document.write("Please enter a valid Percentage")
}*/

//JavaScript Conditional Ternary Operational Tutorial
/*var a = 35
var b;
//(a == 25)? b="True": b="False";
b = (a == 25)? "True": "False";
console.log("Value is " + b);*/

//JavaScript Switch Case Tutorial
/*var age = 77
switch (true) {
    case ( age >= 18 && age <= 25):
        document.write("You are Eligible")
        break;

    case (age >= 26 && age <=60): 
    document.write("You are not Eligible")
        break;
    default:
        document.write("Please enter the valid age.")
}*/

//JavaScript Alert BOx Tutorial
/*var a = 15
var b = 20
if(a>b){
    alert("A is greater")
}else{
    alert("Value of B is : " + b )
    alert(a+b)
}*/

//JavaScript Confirm Box Tutorial
/*var x = confirm("Do you like js?")
if(x){
    alert("Welcome")
}else{
    alert("Go ahead")
}*/

//JavaScript Prompt Box Tutorial
/*var per = prompt("enter your percentage :")
if(per >= 80 && per <= 100){
        document.write("you are in merit");
}else if(per >= 60 && per < 80){
    document.write("you are in Ist Division");
}else if(per >= 45 && per < 60){
    document.write("you are in IInd Division");
}else if(per >= 33 && per < 45){
    document.write("you are in IIIrd Division");
}else if(per < 33){
    document.write("you are Fail")
}else{
    document.write("Please enter a valid Percentage")
}*/

//JavaScript Functions Tutorial
/*function hello(){
    document.write("Hello and welcome. ")
}
function $name(){
    document.write("My name is Usen, BITCH. ")
}
hello()
document.write("<br>")
hello()
document.write("<br>")
$name()*/

//JavaScript Functions with Parameters Tutorial
/*function Hello(fName="Name", lName="Surname"){
    document.write("Hello " + fName + " " + lName + "<br>");
} 

function sum(a,b){
    document.write(a+b);
}
Hello("Will", "Smith")
Hello("General", "Marshmallow")

var x=23;
var y=30;
sum(x,y)*/

//JavaScript Functions with Return Value Tutorial
/*function Sum(math,sc,lng){
    var a = math + sc +lng;
    return a; 
} 
function percentage(t){
    var per = t/300 * 100
    document.write(per)
}

var total= Sum(58,56,75)
percentage(total)*/

//JavaScript Global & Local Variable Tutorial
/*var a = 44
function age(){
    var a = 34
    document.write(a + "<br>")
}
age()
document.write(a)*/

//JavaScript Basic Events
/*function hello(){
    alert("Hello Everyone")
}*/

//JavaScript While Loop Tutorial
 /*var a = 10
 document.write("<ul>")
 while (a>= -4) {
    document.write("<li>" + a + "Hello world </li>")
    a--
 }
 document.write("</ul>")*/

 //JavaScript Do While Loop Tutorial
 /*var a = 1
 do {
    document.write("Hello World <br>")
    a++
 } while (a<=10);*/

 //JavaScript For Loop Tutorial
 for( var a = 1; a<=10; a++){
    document.write("hello world <br> ")
 }