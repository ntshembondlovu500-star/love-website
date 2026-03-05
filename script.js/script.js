const text = "I Made This Just For You ❤️";
let i = 0;

function typeWriter() {
if (i < text.length) {
document.getElementById("typewriter").innerHTML += text.charAt(i);
i++;
setTimeout(typeWriter, 80);
}
}

typeWriter();

function acceptLove(){

document.getElementById("result").style.display="block";

for(let i=0;i<40;i++){

let heart=document.createElement("div");
heart.innerHTML="❤️";
heart.className="heart";

heart.style.left=Math.random()*100+"vw";
heart.style.bottom="0px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000)

}

}