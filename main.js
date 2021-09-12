function setup(){

    c1 = createCanvas(650, 500);
    c1.center();
    v1 = createCapture(VIDEO);
    v1.hide();
}
tintcolor='';
function draw(){

    image (v1, 0, 0, 650, 500); 
    tint(tintcolor);
}
function filtertint(){
tintcolor = document.getElementById("colorname").value;
}
function take_snapshot(){
    save("me.png");
}

