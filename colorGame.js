var nSquares = 6;
var colors =  generateRandomColors(nSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = randomColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message')
var h1 = document.getElementById('header');
var resetButton = document.getElementById('reset');
var easyButton = document.getElementById('easy');
var hardButton = document.getElementById('hard');

init();

function init() {
    setupSquares();
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        //add colors to squares
        squares[i].style.backgroundColor = colors[i];
        //add click listiners
        squares[i].addEventListener('click', function(){
            //grab color of clicked square and compare to picked color
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = 'Correct!'
                resetButton.textContent = 'Play Again?'
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } 
            else {
                this.style.backgroundColor ='#232323';
                messageDisplay.textContent = 'Try Again'
            }
        });
    }
}

//select easy button and unselect hard button
easyButton.addEventListener('click', function(){
    easy.classList.add('selected');
    hard.classList.remove('selected');
    nSquares = 3
    colors = generateRandomColors(nSquares)
    pickedColor = randomColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i]
        }
        else {
            squares[i].style.display = 'none';
        }
    }
})

//select hard button and unselect easy button
hardButton.addEventListener('click', function(){
    easy.classList.remove('selected');
    hard.classList.add('selected');
    colors = generateRandomColors(nSquares)
    pickedColor = randomColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i]
        squares[i].style.display = 'block';        
    }
})

//reset game and play again
resetButton.addEventListener('click', function(){
    colors = generateRandomColors(nSquares);
    pickedColor = randomColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];   
       }
    //resets background color to original color
    h1.style.backgroundColor = 'steelblue';
    //resets text from 'Play Again' to 'New Colors'
    resetButton.textContent = 'New Colors';
    messageDisplay.textContent = "";
})

function changeColors(color) {
    //loop through all squares to match correct color
    for(var i = 0; i < squares.length; i++){
     squares[i].style.backgroundColor = color;   
    }
}

function randomColor() {
    //math.floor gets whole numbers
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(n) {
    var arr = [];
    for(var i = 0; i < n; i++) {
        arr.push(newColor());
    }
    return arr;
}

function newColor() {
    //pick blue, green and red 0-255
    var r = (Math.floor(Math.random() * 256));
    var g = (Math.floor(Math.random() * 256));
    var b = (Math.floor(Math.random() * 256));
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}