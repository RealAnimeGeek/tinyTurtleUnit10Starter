TinyTurtle.apply(window, [undefined, 400, 400]);

function square(){
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
}
function triangle(){
right(30);
forward(50);
right(120);
forward(50);
right(120);
forward(50);
}  

function rectangle(){
forward(40);
right(90);
forward(100);
right(90);
forward(50);
right(90);
forward(100);
right(90);
forward(50);
}
function pentagon(){
left(72);
forward(50);
left(72);
forward(50);
left(72);
forward(50);
left(72);
forward(50);
left(72);
forward(50);
}
function house(){
square();
forward(1);
triangle();
}
// Type your function call below

//triangle();
house();

stamp();
