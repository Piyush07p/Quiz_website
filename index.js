const question=[{

        'que':'what is the full form of smtp',
        'a':'a) simple mail testing protocol',
        'b':'b) simple mail testing parameter',
        'c':'c) simple mail transfer protocol',
        'd':'d) simple mail transfer practice',
        'correct':1
},
{

    'que':'port number of ftp',
    'a':'a) 22',
    'b':'b) 21',
    'c':'c) 28',
    'd':'d) 25',
    'correct':1
},
{

    'que':'full form of tcp',
    'a':'a) transmission control protocol',
    'b':'b) transmission control parameter',
    'c':'c) transmission control practice',
    'd':'d) transmission control port',
    'correct':0
},
{

    'que':'size of ipv4 address in bits',
    'a':'a) 16',
    'b':'b) 32',
    'c':'c) 128',
    'd':'d) 64',
    'correct':1
    
},
{

    'que':'size of ipv6 address in bits',
    'a':'a) 64',
    'b':'b) 32',
    'c':'c) 128',
    'd':'d) 48',
    'correct':2
    
},
{

    'que':'full form of udp',
    'a':'a) user datagram protocol',
    'b':'b) unit datagram protocol',
    'c':'c) user datagram practices',
    'd':'d) user data protocol',
    'correct':0
    
},
{

    'que':'DNS cannot be used for which of the following?',
    'a':'a) Resolving IP adress to ahostname',
    'b':'b) Resolving email domain`s mail server IP',
    'c':'c) Storing general purpose text information',
    'd':'d) None of the above',
    'correct':1
    
},
{

    'que':'How many DLL(data link layer) sub layer are defined by IEEE 802.11',
    'a':'a) 3',
    'b':'b) 4',
    'c':'c) 1',
    'd':'d) 2',
    'correct':3
    
},
{

    'que':'your company needs 70000 IP addresses. Assuming that the company  will use a single IP network  address space e',
    'a':'a) Class D',
    'b':'b) Class A',
    'c':'c) Class B',
    'd':'d) Class C',
    'correct':1
    
},
{

    'que':'Which WLAN IEEE specification allows up to 54Mbps at 2.4GHz',
    'a':'a) A',
    'b':'b) B',
    'c':'c) G',
    'd':'d) N',
    'correct':2
    
},
{

    'que':'What protocol does PPP use to identify the Network layer protocol',
    'a':'a) NCP',
    'b':'b) ISDN',
    'c':'c) HDLC',
    'd':'d) LCP',
    'correct':0
    
},
{

    'que':'Which protocol does DHCP use at the Transport layer',
    'a':'a) IP',
    'b':'b) TCP',
    'c':'c) UDP',
    'd':'d) ARP',
    'correct':2
    
},
{

    'que':'Where is hub specified in the OSI model',
    'a':'a) Session layer',
    'b':'b) Physival layer',
    'c':'c) Data Link Layer',
    'd':'d) Application Layer',
    'correct':1
    
},
{

    'que':'Which protocol does Ping use',
    'a':'a) TCP',
    'b':'b) ARP',
    'c':'c) ICMP',
    'd':'d) BootP',
    'correct':2
    
},
{

    'que':'What does PoP stands for ?',
    'a':'a) Pre office protocol',
    'b':'b) Post office protocol',
    'c':'c) Protocol of post',
    'd':'d) None',
    'correct':1
    
},
{

    'que':'What is the port number of PoP',
    'a':'a) 35',
    'b':'b) 43',
    'c':'c) 25',
    'd':'d) 110',
    'correct':3
    
},
{

    'que':'Identify the layer which provides service to the user',
    'a':'a) Session layer',
    'b':'b) Application layer',
    'c':'c) Presentation layer',
    'd':'d) Physical layer',
    'correct':1
    
},
{

    'que':'The first network which was based in TCP/IP protocol',
    'a':'a) ARPANET',
    'b':'b) HUB',
    'c':'c) Ethernet Card',
    'd':'d) Router',
    'correct':0
    
},
{

    'que':'Identify the incorrect netwwork topology',
    'a':'a) Bus',
    'b':'b) Star',
    'c':'c) P2P',
    'd':'d) Ring',
    'correct':2
    
},
{

    'que':'Identify the device used to boost up a weak signal',
    'a':'a) Modem',
    'b':'b) Repeater',
    'c':'c) Switch',
    'd':'d) Router',
    'correct':1
    
},
{

    'que':'What does MAC stand for',
    'a':'a) Media Access Control',
    'b':'b) Mass Access Control',
    'c':'c) Media Access Carriage',
    'd':'d) None',
    'correct':0
    
}
]




let counter;
let timevalue=15;

const que=document.getElementById('que')
const options=document.querySelectorAll('.li')
const queno=document.getElementById('que.no')
const result=document.querySelector('.result')

// --------------for_loading_question----------------

let arr=[];
let splice;
const loadques=(ind)=>{
    //  function score_counter(x){
    //     if(data.correct==x)
    //     score++;
    //  }
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
      startTimer(15);
}



// ------------------choose_options-------------------
let checked=false
var li=document.querySelectorAll('li');
function changeC(x){

     for(let i=0;i<4;i++)
     {
         if(li[i].classList.contains('color'))
         li[i].classList.remove('color')
     }
    li[x].classList.add('color');
  checked=true;
//    score_counter(x);

}



// ----------(( confirming && move_to_next_ques ))----------------

var index=0 ; 

const conf_btn=document.querySelector(".confirm");
const score=document.getElementById("score_span");

conf_btn.onclick=()=>{
    if(queno.innerText<10)
    {
        if(checked){  // this will check whther any option is chosen or not

            index++;
            loadques(index);
            
            reset_color();   // this will remove the color of the selected option
            
            clearInterval(counter);
            startTimer(timevalue)
            checked=false;
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
    loadques(0);

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
             startTimer(timevalue);
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
   clearInterval(counter);
    startTimer(timevalue)
   loadques(0);


})