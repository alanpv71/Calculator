var fstnum,secondnum,opps,ll="",done=0;


function num(a) {

   var display = document.getElementById("display");
   display.value += a;
 }


 function cleardisplay(){

    var clrscr = document.getElementById("display");
    clear="";
    clrscr.value = clear;
 }

 function backspace(){

    
 }


 function operation(ops){
     
        if(ops == 'add'){
            var display = document.getElementById("display");
            fstnum = eval(display.value);
            display.value=ll;
            opps =1;
            } 
        else if(ops == 'sub'){
            var display = document.getElementById("display");
            fstnum = eval(display.value);
            display.value=ll;
            opps = 2;
            }
        else if(ops == 'mul'){
            var display = document.getElementById("display");
            fstnum = eval(display.value);
            display.value=ll;
            opps = 3;
            }
        else if(ops == 'div'){
            var display = document.getElementById("display");
            fstnum = eval(display.value);
            display.value=ll;
            opps = 4;
            }
        else if(ops == 'mod'){
            var display = document.getElementById("display");
            fstnum = eval(display.value);
            display.value=ll;
            opps = 5;
            }
            else if(ops == 'dec'){
                var display = document.getElementById("display");
                display.value+=".";
                fstnum = eval(display.value);
                }
 }


 function calc(){
    gg = document.getElementById("display");
    secondnum = eval(gg.value);
      
    if (opps == 1){
        var res = fstnum + secondnum;
        
                   
    }
    if (opps == 2){
        var res = fstnum - secondnum;
          
    }

    if (opps == 3){
        var res = fstnum * secondnum;
          
    }
    if (opps == 4){
        var res = fstnum / secondnum;
          
    }
    if (opps == 5){
        var res = fstnum % secondnum;
          
    }
    gg.value = res;
 
   
}
