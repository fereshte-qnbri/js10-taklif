// According to your js10 session, write a code that shows why we shouldn't use var?


function testVarScope() {
    var x = 10; 
  
    if (true) {
      var x = 20; 
      console.log(x); 
    }
  
    console.log(x);
  }
  testLetScope();
