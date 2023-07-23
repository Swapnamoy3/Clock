



function timedispaly(){


    let time=new Date();
let hour=time.getHours();
let amOrPm=Math.floor(hour/12);//0 if am and 1 if pm;
hour=(hour==0)? 12 :hour%12;

let deg=(hour/12)*360
console.log(hour,amOrPm)
let hourHand=document.getElementById("hourHand");
hourHand.style.transform=`rotate(${deg}deg)`

let min=time.getMinutes();//0 60
let minDeg=(min*6);

let minhand=document.getElementById("minHand");
minhand.style.transform=`rotate(${minDeg}deg)`

let seconds=time.getSeconds();
let secondDeg=seconds*6;

let secondHand=document.getElementById("secondHand");
secondHand.style.transform=`rotate(${secondDeg}deg)`;

let digitalTime=document.getElementById("digitalClock");
digitalTime.innerHTML=`${hour} : ${min} : ${seconds} ${amOrPm==0? "AM":"PM"}`

}

setInterval(timedispaly,1000);



