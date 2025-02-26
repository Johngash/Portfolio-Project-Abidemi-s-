let player1 = document.querySelector(".a"),
player2 = document.querySelector(".b"),
canvas = document.querySelector("canvas"),
width = window.innerWidth,
height = window.innerHeight;

canvas.width = 80/100 * width;

ctx = canvas.getContext("2d");


let x = 10,
y = 10,
dx = (Math.random() - 0.5) * 15;
dy = (Math.random() - 0.5) * 15;

let snake = new Snake(x,y,10,10,10,10); 


function gameLoop(){
    requestAnimationFrame(gameLoop);
    snake.controls()
    snake.update()
    
    canvas.height = 80/100 * height;
    // snake.x += snake.dx;
    // snake.y += snake.dy;
    snake.draw()
    player1.innerText = snake.sigh;
    player2.innerText = snake.sigh;
    if(snake.x >= canvas.width){
        snake.x = 1;
    }
    if(snake.y >= canvas.height){
        snake.y = 1;
    }
    if(snake.x <= 0){
        snake.x = canvas.width - 1;
    }
    if(snake.y <= 0){
        snake.y = canvas.height - 1;
    }
}

gameLoop();