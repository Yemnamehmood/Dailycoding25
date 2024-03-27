"use strict";
//DAY 25
//Task 1 (Assingning and updating variables)
//this function shows how to assign and update variable values
function updateVariable() {
    let number = 10;
    console.log("Initial value number"); //Logs the initial value
    number = 20;
    console.log("Updated value number"); //logs the updated value
}
updateVariable();
//we assign a value to a variable and then update it, showing how values can change
//TASK 2 (Swapping variables)
//this function swaps the values of two variables
function swapValue() {
    let a = 5, b = 10; //initially a is 5 and b is 10
    console.log("Before swap: a=", a, "b=", b);
    let temp = a; //temporarily stores the value of a 
    a = b; //sets a to b's value
    b = temp; //sets b to a's orignial value stored in temp
    console.log("After swap: a=", a, "b=", b); //logs the swapped values
}
swapValue();
//we use temporary variable to hold one value while we swap them, like a magic trick!!
//TASK 3 (Compound assignment)
//this function uses compound assingment operators for different operations
function useCompoundOperators() {
    let x = 4; //it means x is equal to 4 
    console.log("Initial x:", x);
    x += 2; //adding 2 to x
    console.log("After addition:", x); //it will show x after addition 
    x -= 1; //subtracting 1 from x
    console.log("After subtraction:", x); //it will show x after subtraction
    x *= 5; //multiplying x by 5
    console.log("After multiplication:", x); //it will show x after multiply 
    x /= 8; //Dividing x by 8
    console.log("After divide:", x); //it will show x after divide
}
useCompoundOperators();
//We simply use airthmetic operators in this task 
