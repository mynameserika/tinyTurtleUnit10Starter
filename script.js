TinyTurtle.apply(window, [undefined, 400, 400]);

function square(size){
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
forward(size);
right(90);
forward(size);
}

function triangle(size){
forward(size);
right(120);
forward(size); 
right(120);
forward(size);
}

function hexgon(size){
    forward(size);
    right(60);
    forward(size);
    right(60);
    forward(size);
    right(60);
    forward(size);
    right(60);
    forward(size);
    right(60);
    forward(size);
    right(60);
    forward(size);
    right(60);
}

function shape(type, size){
    if(type === "triangle"){
        triangle(size);
    } else if (type==="square") {
        square(size);
    }else if (type==="hexgon"){
        hexgon(size);
    
    }else{
        alert("invaild answer");
    }
}


// Type your function call below
// square(15);
// square(80);

// triangle(90);
// triangle(100);

shape('triangle',99);
shape('square',50);
shape('hexgon',70);
//shape('cirlce',40)

stamp();