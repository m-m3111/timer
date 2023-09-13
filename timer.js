const time= document.querySelector('#time')
const start= document.querySelector('#start')
const pause= document.querySelector('#pause')
const reset= document.querySelector('#reset')

let sartTime=0;
let elapsed=0;
let current=0;
let paused= true;
let intervalid;
let hrs=0;
let mins=0;
let secs=0;

start.addEventListener('click', ()=>{ 
 if(paused){
    paused= false;
    startTime= Date.now()- elapsed;
    intervalid= setInterval(updateTime, 100)
 }}
)

pause.addEventListener('click', ()=> {
    if(!paused){
        paused= true;
        elapsed= Date.now()-sartTime;
        clearInterval(intervalid);
    }
})

reset.addEventListener('click', ()=> {
    paused= true;
    clearInterval(intervalid);
    sartTime=0;
    elapsed=0;
    current=0;
    hrs=0;
    mins= 0;
    secs= 0;
    time.textContent= "00:00:00"

})

function updateTime(){
    elapsed= Date.now() - startTime;

    secs= Math.floor((elapsed/1000) % 60);
    mins= Math.floor((elapsed/(1000*60)) % 60);
    hrs= Math.floor((elapsed/(1000*60*60)%60))

    secs= pad(secs)
    mins=pad(mins)
    hrs= pad(hrs)

    time.textContent= `${hrs}:${mins}:${secs}`

    function pad(u){
        return (('0')+u).length >2 ? u: '0'+u
    }
}