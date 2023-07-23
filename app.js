

//  let respanse=prompt("dou you want to be reaAlerted");

   
// if(respanse=="n"){
//     console.log("OK");
// }else{
//     setTimeout((a) => {
//         alert("Submit ypout HW"+a);
//     }, 2000,1);
// }

// let id=setInterval(function(a,b) {
//     console.log(a,b);
//     b+=a;
// }, 1000,1,1);

// let elements=document.getElementsByTagName("a")
// elements=Array.from(elements);
// let arrayofelements=[];
// for(let i=0;i<elements.length;i++){
//   arrayofelements.push(elements[i].href)
// }

// (arrayofelements).sort;

// for(let i=0;i<arrayofelements.length;i++){
//     for(let j=0;j<elements.length;j++){
//         if(elements[j].href==arrayofelements[i])
//         console.log(elements[i].innerHTML)
//     }
//   }

// let a=document.getElementById('bulb');
// function glow(){
//     a.classList.toggle('glow');
// }
// // a.addEventListener('click',glow);
// setInterval(glow, 100);



function timedispaly(){


    let time=new Date();
let hour=time.getHours();
let amOrPm=Math.floor(hour/12);//0 if am and 1 if pm;
hour=hour%12;

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



