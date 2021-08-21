var mouse_event="empty";
var last_postion_of_x,last_postion_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "darkblue";
width_of_line = 1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{

mouse_event= "mousedown";

}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{

mouse_event= "mouseup";

}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{

mouse_event= "mouseleave";

}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{

current_postion_of_mouse_x = e.clientX - canvas.offsetLeft;
current_postion_of_mouse_y = e.clientY - canvas.offsetTop;

if(mouse_event=="mousedown")
{

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.arc(current_postion_of_mouse_x,current_postion_of_mouse_y,20,0,2*Math.PI);

ctx.stroke();

}

last_postion_of_x = current_postion_of_mouse_x;
last_postion_of_y= current_postion_of_mouse_y;

}