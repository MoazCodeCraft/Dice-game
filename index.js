window.onload=function(){
var random1=Math.floor(Math.random()*6)+1;
var random2=Math.floor(Math.random()*6)+1;
var random_img1="dice"+random1+".png";
var random_img2="dice"+random2+".png";

document.querySelector(".img1").setAttribute("src",random_img1);
document.querySelector(".img2").setAttribute("src",random_img2);
if(random2<random1){
document.querySelector("h1").innerHTML="🎈Player 1 won";}
else if(random2>random1){
    document.querySelector("h1").innerHTML="🎈Player 2 won";}
    else{
        document.querySelector("h1").innerHTML="Tie!";
    }
}