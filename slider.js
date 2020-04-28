//................ parent open..................//        
var a = document.getElementsByClassName("main")[0].style;
a.position="relative";
a.height="90vh";
a.width="100%";
a.overflow="hidden";
a.background="blue";
//................parent closed...................//

//............button...........//
var btn1 = document.getElementsByTagName("button")[0].style;
btn1.position="absolute";
btn1.bottom="0";
btn1.height="10vh";
btn1.width="25%";
btn1.background="cyan";
btn1.border="2px dashed black";
btn1.fontSize="25px";
btn1.cursor="pointer";

var btn2 = document.getElementsByTagName("button")[1].style;
btn2.position="absolute";
btn2.bottom="0";
btn2.left="25%";
btn2.height="10vh";
btn2.width="25%";
btn2.background="cyan";
btn2.border="2px dashed black";
btn2.fontSize="25px";
btn2.cursor="pointer";

var btn3 = document.getElementsByTagName("button")[2].style;
btn3.position="absolute";
btn3.bottom="0";
btn3.left="50%";
btn3.height="10vh";
btn3.width="25%";
btn3.background="cyan";
btn3.border="2px dashed black";
btn3.fontSize="25px";
btn3.cursor="pointer";

var btn4 = document.getElementsByTagName("button")[3].style;
btn4.position="absolute";
btn4.bottom="0";
btn4.left="75%";
btn4.height="10vh";
btn4.width="25%";
btn4.background="cyan";
btn4.border="2px dashed black";
btn4.fontSize="25px";
btn4.cursor="pointer";
//...........button.........//

//.................Image1 open...................//
var img1 = document.getElementsByTagName("img")[0].style;
img1.position="absolute";
img1.left="0%";
img1.height="100%";
img1.width="100%";
//................Image1 closed.................//


//.................Image2 open...................//
var img2 = document.getElementsByTagName("img")[1].style;
img2.position="absolute";
img2.left="100%";
img2.height="100%";
img2.width="100%";
//................Image2 closed.................//


//.................Image3 open...................//
var img3 = document.getElementsByTagName("img")[2].style;
img3.position="absolute";
img3.left="100%";
img3.height="100%";
img3.width="100%";
//................Image3 closed.................//


//.................Image4 open...................//
var img4 = document.getElementsByTagName("img")[3].style;
img4.position="absolute";
img4.left="100%";
img4.height="100%";
img4.width="100%";
//................Image4 closed.................//


//................functions open...............//

function first(){
    img1.left="0";
    img1.transitionDuration="3s";
    img2.left="100%";
    img3.left="100%";
    img4.left="100%";
}

function second(){
    img2.left="0";
    img2.transitionDuration="3s";
    img1.left="-100%";
    img3.left="100%";
    img4.left="100%";
}

function third(){
    img3.left="0";
    img3.transitionDuration="3s";
    img1.left="100%";
    img2.left="-100%";
    img4.left="100%";
}

function fourth(){
    img4.left="0";
    img4.transitionDuration="3s";
    img1.left="100%";
    img2.left="100%";
    img3.left="-100%";
}

//...................functions closed................//