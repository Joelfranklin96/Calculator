var expression = "";
var ans = "0";
var flag = false; 

var screen = document.getElementById('content');

var yellow_numbers = document.getElementsByClassName('square-one');

yellow_numbers[0].addEventListener('click', function(){
    screen.innerText = "0"
    expression = "";
    ans = "0";
    flag = false;
});

// flag == false is for when you enter a number (say 7) and then you press again, then 77 will be displayed and not just 7.
// screen.innerText == "Ans" is for when you press "Ans", "Ans" is displayed on the screen and you press (say 7), then 7 will be displayed and not "Ans7"
// expression == "" is for when initially 0 is displayed on the screen and you press any number (say 7), then 7 is displayed and not 07
// expression == "Error" is for when "Error" is displayed on the screen and you press any number (say 7), then 7 is displayed and not "Error7"
// screen.innerText != "" is for when you evaluate an expression and press "=", the answer is displayed. After the answer is displayed,
// if you press (say 7), then 7 would be displayed and not "ans7"

yellow_numbers[1].addEventListener('click', function(){
    if(((flag == false) || (screen.innerText == "Ans")) && ((expression=="") || (expression == "Error") || (screen.innerText != ""))){
        screen.innerText = "7";
        expression = "7";
    }
    else{
        screen.innerText += "7";
        expression += "7";
    }
    flag = true;
});

yellow_numbers[2].addEventListener('click', function(){
    if(((flag == false) || (screen.innerText == "Ans")) && ((expression=="") || (expression == "Error") || (screen.innerText != ""))){
        screen.innerText = "8";
        expression = "8";
    }
    else{
        screen.innerText += "8";
        expression += "8";
    }
    flag = true;
});

yellow_numbers[3].addEventListener('click', function(){
    if(((flag == false) || (screen.innerText == "Ans")) && ((expression=="") || (expression == "Error") || (screen.innerText != ""))){
        screen.innerText = "9";
        expression = "9";
    }
    else{
        screen.innerText += "9";
        expression += "9";
    }
    flag = true;
});

yellow_numbers[4].addEventListener('click', function(){
    if(((flag == false) || (screen.innerText == "Ans")) && ((expression=="") || (expression == "Error") || (screen.innerText != ""))){
        screen.innerText = "4";
        expression = "4";
    }
    else{
        screen.innerText += "4";
        expression += "4";
    }
    flag = true;
});

yellow_numbers[5].addEventListener('click', function(){
    if(((flag == false) || (screen.innerText == "Ans")) && ((expression=="") || (expression == "Error") || (screen.innerText != ""))){
        screen.innerText = "5";
        expression = "5";
    }
    else{
        screen.innerText += "5";
        expression += "5";
    }
    flag = true;
});

yellow_numbers[6].addEventListener('click', function(){
    if(((flag == false) || (screen.innerText == "Ans")) && ((expression=="") || (expression == "Error") || (screen.innerText != ""))){
        screen.innerText = "6";
        expression = "6";
    }
    else{
        screen.innerText += "6";
        expression += "6";
    }
    flag = true;
});

yellow_numbers[7].addEventListener('click', function(){
    if(((flag == false) || (screen.innerText == "Ans")) && ((expression=="") || (expression == "Error") || (screen.innerText != ""))){
        screen.innerText = "1";
        expression = "1";
    }
    else{
        screen.innerText += "1";
        expression += "1";
    }
    flag = true;
});

yellow_numbers[8].addEventListener('click', function(){
    if(((flag == false) || (screen.innerText == "Ans")) && ((expression=="") || (expression == "Error") || (screen.innerText != ""))){
        screen.innerText = "2";
        expression = "2";
    }
    else{
        screen.innerText += "2";
        expression += "2";
    }
    flag = true;
});

yellow_numbers[9].addEventListener('click', function(){
    if(((flag == false) || (screen.innerText == "Ans")) && ((expression=="") || (expression == "Error") || (screen.innerText != ""))){
        screen.innerText = "3";
        expression = "3";
    }
    else{
        screen.innerText += "3";
        expression += "3";
    }
    flag = true;
});

yellow_numbers[10].addEventListener('click', function(){
    if(((flag == false) || (screen.innerText == "Ans")) && ((expression=="") || (expression == "Error") || (screen.innerText == "Ans"))){
    // can also be written as if(((flag == false) && ((expression == "") || (expression == "Error"))) || (screen.innerText == "Ans"))
        screen.innerText = ".";
        expression = ".";
    }
    else{
        screen.innerText += ".";
        expression += ".";
    }
    flag = true;
});

var double_numbers = document.getElementsByClassName("square-three")

double_numbers[0].addEventListener('click', function(){
    if(screen.innerText == "Error"){
        screen.innerText = "Ans";
        ans = "0"
        expression = ans;
    } else if ((screen.innerText != "0") && (screen.innerText != "")){
        screen.innerText = "Ans";
    } else{
        screen.innerText = "Ans";
        expression += ans;
    }
});

double_numbers[1].addEventListener('click', function(){

    if(((flag == false) || (screen.innerText == "Ans")) &&((expression == "Error") || (screen.innerText != ""))){
        screen.innerText = "0";
        expression = "0";   
    }
    else{
        screen.innerText += "0";
        expression += "0";
    }
    flag = true;
});

var red_numbers = document.getElementsByClassName('square-two');

red_numbers[0].addEventListener('click', function(){

    screen.innerText = "";
    expression += "/";
})

red_numbers[1].addEventListener('click', function(){
    screen.innerText = "";
    expression += "*";
})

red_numbers[2].addEventListener('click', function(){
    screen.innerText = "";
    expression += "-";
})

red_numbers[3].addEventListener('click', function(){
    screen.innerText = "";
    expression += "+";
})

red_numbers[4].addEventListener('click', function(){

    if (expression.includes("Error")){
        screen.innerText = "Error";
    }
    else if (expression != ""){
        try {
            var result = eval(expression);
            if ((result.toString().includes(".")) && (result.toString().split(".")[1].length > 6)){
                screen.innerText = result.toFixed(6);
            }
            else{
                screen.innerText = result;
            }
        } catch (e) {
            if (e instanceof SyntaxError) {
                screen.innerText = "Error";
            }
        }
    }
    if(screen.innerText == "Error"){
        expression = "Error"
        ans = "0";
    }
    else{
        expression = screen.innerText;
        ans = screen.innerText;
        flag = false;
    }
})