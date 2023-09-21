function setup() {
    createCanvas(600, 600);
    background("#2196F3")
              
  }
  
  function draw() {
    stroke("#FFEB3B");
    fill("#FFEB3B");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 10, 20);
    }
  }