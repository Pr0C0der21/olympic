canvas = document.getElementById("myCanvas");
color="red";
posx = "";
posy = "";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth=2;
ctx.stroke();
function Draw()
{
    color="blue";
    posx=250;
    poxy=210;
    circle(color , posx , posy);
    color="yellow";
    posx=300;
    poxy=250;
    circle(color , posx , posy);
    color="black";
    posx=350;
    poxy=210;
    circle(color , posx , posy);
    color="green";
    posx=400;
    poxy=250;
    circle(color , posx , posy);
    color="red";
    posx=450;
    poxy=210;
    circle(color , posx , posy);
}
function circle(color , posx , posy)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.arc(posx, posy, 40 ,0 , 2 * Math.PI);
    ctx.stroke();
}
function clearArea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}