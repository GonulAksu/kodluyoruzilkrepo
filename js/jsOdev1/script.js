
let userName=prompt("İsminiz");
let isim=document.querySelector(".user_name");
isim.innerHTML=userName;

let date=document.querySelector('.date');
function startTime(){
    const time=new Date();
    let h=time.getHours();
    let m=time.getMinutes();
    let s=time.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    let day=time.getDay();
    switch(day){
        case 0 : day="Pazar";
            break;
        case 1 : day="Pazartesi";
            break;
        case 2 : day="Salı";
            break;
        case 3 : day="Çarşamba";
            break;
        case 4 : day="Perşembe";
            break;
        case 5 : day="Cuma";
            break;
        default : day="Cumartesi";
    
    }
  
    
    date.innerText=`${day} ${h}:${m}:${s}`;

    setTimeout(startTime,1000);
   
}
function checkTime(i){
    if(i<10){i="0"+i};
    return i;
}



