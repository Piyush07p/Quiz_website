
import {api} from "./app.js";




let question=[];
 
for(let i=0;i<api.length;i++)
{
    question.push(api[i]);
}
 

let ans;
let score =0;
let counter;
let timevalue=40;
let checked = false;


const que=document.getElementById('que')
const options=document.querySelectorAll('.li')
const queno=document.getElementById('que.no')
const result=document.querySelector('.result')

// --------------for_loading_question----------------

let arr=[];
let splice;
const loadques=(ind)=>{
    //for randomly generating the 10 question
    
    const data=question[Math.floor(Math.random()*question.length)];
    const index1=question.indexOf(data);
    //for removing the index of the question which has occured once
    
    splice=question.splice(index1,1);
    queno.innerText=ind+1
    que.innerText=data.que
    
    options[0].innerText=data.a
    options[1].innerText=data.b
    options[2].innerText=data.c
    options[3].innerText=data.d
    ans = data.correct;
    arr.push(splice)
    

}


loadques(0);


// ---------------(end)-------------------


// -----------------to_start_quiz------------------


const start_btn=document.querySelector('.start button');
const start=document.querySelector('.start')

function count_time(){
    clearInterval(interval);
    interval= setInterval(startimer,10);
}

const quiz_box=document.querySelector('.quiz')
const timer=document.querySelector('.timer')

start_btn.onclick=()=>{
      
      quiz_box.style.display="unset";
      start.style.display="none";
      timer.style.display="unset";

    //timer will start on starting the quiz
      startTimer(40);
      count_time();
      
}




// ------------------choose_options-------------------

var li=document.querySelectorAll('li');

Array.from(li).forEach(elem =>{
    elem.addEventListener('click',()=>{
        for(let i=0;i<4;i++)
     {
         if(li[i].classList.contains('color'))
         li[i].classList.remove('color')
     }
    li[elem.dataset.li].classList.add('color');
    if(ans==elem.dataset.li){
        score++;
    }
    checked=true;
    })
})






// ----------((  move_to_next_ques ))----------------

var index=0 ; 
const score_count = document.querySelector("#score_span");
const conf_btn=document.querySelector(".confirm");



    conf_btn.onclick=()=>{
    
        if(queno.innerText<10 )

        {
            if(checked){

            index++;
            loadques(index);
            
            reset_color();   // this will remove the color of the selected option
            
            clearInterval(counter);
            startTimer(timevalue);
            
            checked = false;
        
           }

   
    }
    
    else{
        queno.innerText=0;
        index=0;
        for(let i=0;i<arr.length;i++)
        {
            question.push(arr[i][0]);
        }
        quiz_box.style.display='none';
        timer.style.display='none';
        result.style.display='flex';
       
        // to stop the count_time() function
        clearInterval(interval);
            
    

        // for updating the score
        score_count.innerText=score; 

       
    }
    
}


// ---------------to_reset_color------------------


function reset_color(){
    li[0].classList.remove('color');
    li[1].classList.remove('color');
    li[2].classList.remove('color');
    li[3].classList.remove('color');

}

// -----------for_skipping_question------------

let skip_btn=document.querySelector('.skip')
skip_btn.onclick=()=>{
    if(queno.innerText<10)
    {
     index++;
     loadques(index);
     reset_color();
     clearInterval(counter);
     startTimer(timevalue)
   
    }  
}

// ------------------(end)--------------------


// -----------------Quit_quiz-------------------

const qq=document.querySelector('.quit');
qq.onclick=()=>{
    start.style.display='flex';
    result.style.display='none';
    score=0;
    loadques(0);
    clearInterval(counter);
    startTimer(timevalue);
    reset_color();

}

//----------------end()-----------------



// ------------------timer()-----------------

const timecount=document.querySelector('.t2 span');


function startTimer(time) {
    counter=setInterval(timer,1000)
    function timer(){
        timecount.innerText=time;
         time--;
         if(time<0)
         {
             clearInterval(counter)
    
             index++;
             loadques(index);
             reset_color();
             clearInterval(counter);
             startTimer(timevalue)
         }
    }
}

// -------------------end(timer)--------------


// --------------------replay_quiz------------------

const replay=document.querySelector('.restart')

replay.addEventListener("click",()=>{
   result.style.display='none';
   quiz_box.style.display='unset';
   timer.style.display='unset';
   reset_color();
   clearInterval(counter);
   startTimer(timevalue)
   score=0;
   loadques(0);
   ones="0";
   tens="0";
   hund="0";
   count_time();
   

})


// ----------------------review_sec--------------

