// Using an example, explain the difference between block,global and function scope in variables.

// Global Scope

let globalVariable = "I'm global";

function myFunction() {
  console.log(globalVariable); 
}

myFunction();

// Function Scope

function myFunction() {
    let functionVariable = "I'm local";
    console.log(functionVariable); 
    
    console.log(globalVariable);
  }
  myFunction(); 
  console.log(functionVariable); 


//   Block Scope

  if (true) {
    let blockVariable = "I'm block scoped";
    console.log(blockVariable);  
  }
  
  console.log(blockVariable);