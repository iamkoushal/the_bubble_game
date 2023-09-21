let timer=60;
let score=0;
let tar;

const makeBubble=()=>{

    let bubble='';
    
    for(let i=0;i<161;i++){
        let rnum=Math.random()*10;
        rnum=Math.floor(rnum);
        bubble+= `<div class="bubble">${rnum}</div>`;
    }
    
    document.getElementById("pbtm").innerHTML=bubble;
}

const runTimer=()=>{
     var intime=setInterval(()=>{
        if(timer>0){
        timer--;
        document.getElementById("timer").innerHTML=timer;
        }
        else{
            clearInterval(intime);
            document.querySelector("#pbtm").innerHTML="Game over"
            // +<button class="btn" onclick="window.location.reload();">play again</button>
        }

    },1000);

    
}
const newTarget=()=>{
    let target=Math.random()*10;
    target=Math.floor(target);
    document.getElementById("target").innerHTML=target;
    tar=target;
}

const incScore=()=>{
    score++;
    document.getElementById('score').innerHTML=score;
}

makeBubble();
runTimer();
newTarget();

document.querySelector("#pbtm") .addEventListener('click',(element)=>{
        console.log(element.target.innerHTML)
        let a=element.target.innerHTML;
        // console.log(typeof(element.innerHTML))
        if(a==tar){
            incScore();
            makeBubble();
            newTarget();

        }
    })
