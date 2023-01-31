// random number and attaching it with img path
var count=0;
var countCom=0;
function rock(){
    let ran_No= Math.floor((Math.random()*3)+1);
    document.querySelectorAll(".ima")[ran_No-1].style.transform="translateY(-20px)";
    if(ran_No==2){
        countCom=countCom+1;
        document.querySelector("#comscore").innerHTML=countCom;
        document.querySelector("#result").innerHTML="Computer Picked Paper";
    }else if(ran_No==3){
        count=count+1;
        document.querySelector("#score").innerHTML=count;
        document.querySelector("#result").innerHTML="Computer Picked Scissor";
    }
    else{
        document.querySelector("#result").innerHTML="Draw";
    }
}


function paper(){
    let ran_No= Math.floor((Math.random()*3)+1);
    document.querySelectorAll(".ima")[ran_No-1].style.transform="translateY(-20px)";
    if(ran_No==3){
        countCom=countCom+1;
        document.querySelector("#comscore").innerHTML=countCom;
        document.querySelector("#result").innerHTML="Computer Picked Scissor";
    }else if(ran_No==1){
        count=count+1;
        document.querySelector("#score").innerHTML=count;
        document.querySelector("#result").innerHTML="Computer Picked Rock";
    }
    else{
        document.querySelector("#result").innerHTML="Draw";
    }
}


function scissor(){
    
    let ran_No= Math.floor((Math.random()*3)+1);
    document.querySelectorAll(".ima")[ran_No-1].style.transform="translateY(-20px)";
    if(ran_No==1){
        countCom=countCom+1;
        document.querySelector("#comscore").innerHTML=countCom;
        document.querySelector("#result").innerHTML="Computer Picked Rock";
    }else if(ran_No==2){
        count=count+1;
        document.querySelector("#score").innerHTML=count;
        document.querySelector("#result").innerHTML="Computer Picked Paper";
    }
    else{
        document.querySelector("#result").innerHTML="Draw";
    }

}


$(document).ready(function(){
    setInterval(function(){
          $(".container2").load(window.location.href + " .container2" );
    }, 3000);
    });