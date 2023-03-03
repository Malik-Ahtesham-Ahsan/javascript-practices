console.log("welocme")

function updateClock()
{
let time=new Date();
let min=time.getMinutes();
let currenthours=time.getHours();
let sec=time.getSeconds();
   min=(min<10 ? "0" :" ")+min;
   sec=(sec<10 ? "0" :" ")+sec;

 currenthours=(currenthours>12)?currenthours-12 :currenthours;
 currenthours=(currenthours==0)?12:currenthours;  
let timeofday=(currenthours<12)?"AM":"PM";
let timestr=currenthours+ ":" + min + ":"
                 + sec + " " + timeofday; 
document.getElementById("clock").innerHTML=timestr;
}
