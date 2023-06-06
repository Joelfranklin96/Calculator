function display(){
    screen.innerText = "5";
}

var screen = document.getElementById('content');

var numbers = document.getElementsByClassName('content-1');
numbers[3].addEventListener('click',display);