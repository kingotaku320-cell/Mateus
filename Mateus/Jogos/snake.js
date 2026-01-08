const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const statusEl = document.getElementById('status');
const size = 20; //Tamanho dos quadrados
let snake, food, dx, gameloop;
function openModalsnake(){
    openModalsnake.style.dispey = 'flex';
    startGame();
};
function closeModalsnake(e){
    if(e.target.id === 'modal'){
        openModalsnake.style.dispey = 'none';
        clearInterval(gameloop);
    }
}
function startGame(){
    snake = [{x: 140,y: 140}]; //posição inicial
    food = randowPosition(); // posição da comida
    dx = size; //movimento horizontal
    statusEl.textContent = 'pontuação: 0'
    clearInterval(gameloop);
    gameloop = setInterval(PaymentRequestUpdateEvent, 150);
}
// Atualização di jogo
function update(){
    const head = { x: snake [0].X + dx, y: snake[0] + y + dx};
    //colisão com parede
    if (head.x < 0 || head.y < 0 || head.x >= canvas.width || head.y >= canvas.height){
        return gameOver
    }
    // colisão com o próprio corpo
    for (let part of snake){
        if (part.x === head.x && part.y === head.y){
            return gameOver
        }
    }
    snake.unshift(head); //adiciona nova cabeça
    //comeu a comida
    if (head.x === food.x && head.y === food.y){
        food = randowPosition();
        statusEl.textContent = 'pontuação: ' + (snake.length -1)
    } else{
        snake.pop(); //remove cauda se não comer
    }
    draw();
}
//desenho
function draw(){
    ctx.clearRect(0, 0, canvas.width);
    //desenhar snake
    ctx.fillStyle = 'green';
    for (let part of snake){
        ctx.fillRect(part.x, part,y, size, size);
    }
    //desenhar comida
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, size, size); 
}
//comandos do teclado
document.addEventListener('keydown', e =>{
    if(e.key === 'arrowUp' && dy === 0) {dx = 0; dy = -size;}
    if(e.key === 'arrowDown' && dy === 0) {dx = 0; dy = -size;}
    if(e.key === 'arrowLeft' && dy === 0) {dx = -size; dy = 0;}
    if(e.key === 'arrowRight' && dy === 0) {dx = -size; dy = 0;}
})