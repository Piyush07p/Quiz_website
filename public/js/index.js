
// import {question} from "./app.js";
const question=[
    {
      'que':'if 5+3+2=151022, 9+2+4=183652, 8+6+3=482466 then 7+2+5= ?',
      'a':'a) 143547',
      'b':'b) 132234',
      'c':'c) 2577224',
      'd':'d) 112321',
      'correct':0
    },
    {
       'que':'If in a certain code "RANGE" is coded as 12345 and "RANDOM" is coded as 123678 then "MANGO" would be',
       'a':'a) 89343',
       'b':'b) 84629',
       'c':'c) 82347',
       'd':'d) 83274',
       'correct':2
    },
    {
        'que':'COMPUTER is written as RFUVQNPC. How will MEDICINE be written in that code langauge',
        'a':'a) MFEDJJOE',
        'b':'b) EOJDEJFM',
        'c':'c) MFEJDJOE',
        'd':'d) EOJDJEFM',
        'correct':3
     },
     {
        'que':'If 9X7=3545 and 4X3=1520 then 6X8=?',
        'a':'a) 5040',
        'b':'b) 6050',
        'c':'c) 4030',
        'd':'d) 3040',
        'correct':2
     },
     {
        'que':'BEAN =ABNE  and SALE=LSEA then NEWS=?',
        'a':'a) NWES',
        'b':'b) WNSE',
        'c':'c) ESWN',
        'd':'d) SWNE',
        'correct':1
     },
     {
        'que':'FIG : EGHJFH :: BIN : ?',
        'a':'a) CAJHOM',
        'b':'b) CAHJMOC',
        'c':'c) ACJHMO',
        'd':'d) ACHJMO',
        'correct':3
     },
     {
        'que':'CAT=3120 and DOG=4157 then 25144=?',
        'a':'a) BEND',
        'b':'b) BEADD',
        'c':'c) YADD OR YND',
        'd':'d) can`t  be determined',
        'correct':3
     },
     {
        'que':'If A=26, DOT=42 then CONE=?',
        'a':'a) 52',
        'b':'b) 71',
        'c':'c) 67',
        'd':'d) none',
        'correct':1
     },
     {
        'que':'If 264*2=6, 870*3=11 then 735*5=?',
        'a':'a) 8',
        'b':'b) 21',
        'c':'c) 12',
        'd':'d) 18',
        'correct':2
     },
     {
        'que':'If MOUSE=41 and RATE=6 then NETWORK=?',
        'a':'a) 20',
        'b':'b) 25',
        'c':'c) 55',
        'd':'d) 60',
        'correct':0
     }
]
 

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

const quiz_box=document.querySelector('.quiz')
const timer=document.querySelector('.timer')
function startQ(){
      quiz_box.style.display="unset";
      start.style.display="none";
      timer.style.display="unset";

    //timer will start on starting the quiz
      startTimer(40);
      
}




// ------------------choose_options-------------------

var li=document.querySelectorAll('li');
function changeC(x){
    
     for(let i=0;i<4;i++)
     {
         if(li[i].classList.contains('color'))
         li[i].classList.remove('color')
     }
    li[x].classList.add('color');
    if(ans==x){
        score++;
    }
    checked=true;
    
}






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
        console.log(score)

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


})