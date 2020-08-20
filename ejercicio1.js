// ejercicio 1
// codigo escrito por mi Isabel Pinto
let bubble = {
    x: 300,
    y: 200,
    sizeX: 15,
    sizeY: 15
 }
 
 
 function setup() {
    createCanvas(600, 600);
    // background(0);   
 }
 
 //funcion que se ejecuta continuamente.
 function draw() {
    background(0);
    display(); //llamando a ejecucion una funcion 
    move(); //llama a la funcion move
 }
 
 function display() {
    //serie de lineas de codigo que dibujan la pelota. 
    stroke(255); //color del outline de mi pelota
    strokeWeight(1); //espesor de linea de la pelota
    noFill();
    ellipse(bubble.x, bubble.y, bubble.sizeX, bubble.sizeY);
 }
 
 function move(){
     bubble.x= bubble.x + random(-15,15);
     bubble.y= bubble.y + random(-5,5);
 }