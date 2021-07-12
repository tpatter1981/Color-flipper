let colors;
colors = ["#00008B", "#000080", "#0000CD","#00FFFF", "#008000","#DCDCDC","#FFFF00",];
let btn= document.getElementById("btn");
let color= document.getElementById("colors");
btn.addEventListener("click", ()=>{
let randomNumber = getRandomNumber();
document.body.style.backgroundColor= colors[randomNumber];
color.textContent = color[randomNumber];

});
function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}


