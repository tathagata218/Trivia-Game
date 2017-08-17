$(function(){
 var totalnoSeconds=0;
 var questionSeconds=0;
 var questionCount=0;
 var correctAnswers=0;
 var wrongAnswers=0;
 var secondsCount=30;
 var check1=check2=check3=check4=check5=check6=check7=check8=check9=check10=true;
    var questionsandAnswers=[
        {   "question":"Which one of these companies are from Italy?",
            "choices":["Fiat","Honda","Toyota","Ford"],
            "answer":"Fiat"   },
        { "question":"What is the Capital of Australia?",
            "choices":["Melbourne","Sydney","Canberra","Perth"],
            "answer":"Canberra"},
        { "question":"What is the largest Fish in the Ocean?",
            "choices":["Tuna","Blue Whale","Great White Shark","Whale Shark"],
            "answer":"Whale Shark"},
        { "question":"Who does the voice over for Dory from 'Finding Nemo' and 'Finding Dory'?",
            "choices":["Ellen Degeneres","Diane Keaton","Miley Cyrus","Kaitlin Olsen"],
            "answer":"Ellen Degeneres"},
        { "question":"What football team had the biggest scoring comeback in the history of the Super Bowl?",
            "choices":["Dallas Cowboys","New York Giants","Patriots","New Orleans Saints"],
            "answer":"Patriots"},
        { "question":"In 1867 the United States purchased Alaska from what country?",
            "choices":["Canada","Mongolia","China","Russia"],
            "answer":"Russia"},
        { "question":"How many hearts does an Octopus have?",
            "choices":["One","Six","Three","Four"],
            "answer":"Three"},
        { "question":"Who is the only US president to serve more than two terms?",
            "choices":["President George Washington","President James Monroe","President Franklin Roosevelt","President John Adams"],
            "answer":"President Franklin Roosevelt"},
        { "question":"How many fingers do the Simpsons cartoon characters have?",
            "choices":["Four","Five","Three","Ten"],
            "answer":"Four"},
        { "question":"Which bone is the longest bone in the human body?",
            "choices":["Hip","Femur","Pattle","Tibia"],
            "answer":"Femur"},
      

    ];

  

var question1="<h1>1. "+questionsandAnswers[0]["question"]+"</h1><br><div><h1><ul><li><button class='btn-lg btn-default'>"+questionsandAnswers[0].choices[0]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[0].choices[1]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[0].choices[2]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[0].choices[3]+"</button></li></ul></h1></div>";
var question2="<h1>2. "+questionsandAnswers[1]["question"]+"</h1><br><div><h1><ul><li><button class='btn-lg btn-default'>"+questionsandAnswers[1].choices[0]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[1].choices[1]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[1].choices[2]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[1].choices[3]+"</button></li></ul></h1></div>";
var question3="<h1>3. "+questionsandAnswers[2]["question"]+"</h1><br><div><h1><ul><li><button class='btn-lg btn-default'>"+questionsandAnswers[2].choices[0]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[2].choices[1]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[2].choices[2]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[2].choices[3]+"</button></li></ul></h1></div>";
var question4="<h1>4. "+questionsandAnswers[3]["question"]+"</h1><br><div><h1><ul><li><button class='btn-lg btn-default'>"+questionsandAnswers[3].choices[0]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[3].choices[1]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[3].choices[2]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[3].choices[3]+"</button></li></ul></h1></div>";
var question5="<h1>5. "+questionsandAnswers[4]["question"]+"</h1><br><div><h1><ul><li><button class='btn-lg btn-default'>"+questionsandAnswers[4].choices[0]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[4].choices[1]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[4].choices[2]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[4].choices[3]+"</button></li></ul></h1></div>";
var question6="<h1>6. "+questionsandAnswers[5]["question"]+"</h1><br><div><h1><ul><li><button class='btn-lg btn-default'>"+questionsandAnswers[5].choices[0]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[5].choices[1]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[5].choices[2]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[5].choices[3]+"</button></li></ul></h1></div>";
var question7="<h1>7. "+questionsandAnswers[6]["question"]+"</h1><br><div><h1><ul><li><button class='btn-lg btn-default'>"+questionsandAnswers[6].choices[0]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[6].choices[1]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[6].choices[2]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[6].choices[3]+"</button></li></ul></h1></div>";
var question8="<h1>8. "+questionsandAnswers[7]["question"]+"</h1><br><div><h1><ul><li><button class='btn-lg btn-default'>"+questionsandAnswers[7].choices[0]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[7].choices[1]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[7].choices[2]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[7].choices[3]+"</button></li></ul></h1></div>";
var question9="<h1>9. "+questionsandAnswers[8]["question"]+"</h1><br><div><h1><ul><li><button class='btn-lg btn-default'>"+questionsandAnswers[8].choices[0]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[8].choices[1]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[8].choices[2]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[8].choices[3]+"</button></li></ul></h1></div>";
var question10="<h1>10. "+questionsandAnswers[9]["question"]+"</h1><br><div><h1><ul><li><button class='btn-lg btn-default'>"+questionsandAnswers[9].choices[0]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[9].choices[1]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[9].choices[2]+"</button></li><li><button class='btn-lg btn-default'>"+questionsandAnswers[9].choices[3]+"</button></li></ul></h1></div>";


    $("#contents").html("<button id='clickStart' class='btn-lg btn-default'>Start Game</button>");
    //console.log(questionsandAnswers.length);
    


    $("#clickStart").click(function(){

        //create a function that will return choices button.
       
    function mainFunction(){
        totalnoSeconds++;
    if(totalnoSeconds<=5 && totalnoSeconds>0){
         $("#contents").html("<h1>Starting Game!!!</h1>");
    }

    //This is the first Question
     if (totalnoSeconds>5 && totalnoSeconds<=35 && check1){
       $("#contents").html(question1);
        $("#contents").append("<h1>"+secondsCount+"</h1>");
        secondsCount--;
                
       $("button").click(function(){
        
           if($(this).text()===questionsandAnswers[0]["answer"]){
               $("#contents").html("<h1>You Got it Right</h1>");
               correctAnswers++;
               totalnoSeconds=33;
               secondsCount=30;
               check1=false;
               check1=false;
           }
            else{
        secondsCount=30;
        totalnoSeconds=35;}        
       });
           
    }
    if (totalnoSeconds>35 && totalnoSeconds<=40 && check1){
        $("#contents").html("<h1>You Got it Wrong</h1><br><h1>Answer: "+questionsandAnswers[0]["answer"]+"</h1>");
    secondsCount=30;
    }
   
    //This is the  second Question
    if(totalnoSeconds>40 && totalnoSeconds<=70 && check2){
         $("#contents").html(question2);
        $("#contents").append("<h1>"+secondsCount+"</h1>");
        secondsCount--;
         $("button").click(function(){
        
           if($(this).text()===questionsandAnswers[1]["answer"]){
               $("#contents").html("<h1>You Got it Right</h1>");
               correctAnswers++;
               totalnoSeconds=72;
               secondsCount=30;
               check2=false;
               check2=false;
           }
            else{
        secondsCount=30;
        totalnoSeconds=70;
        
    }
    });
    }

    if (totalnoSeconds>70 && totalnoSeconds<=75 && check2){
        $("#contents").html("<h1>You Got it Wrong</h1><br><h1>Answer: "+questionsandAnswers[1]["answer"]+"</h1>");
    secondsCount=30;
    }

//this is the third Question
if(totalnoSeconds>75 && totalnoSeconds<=105 && check3){
         $("#contents").html(question3);
        $("#contents").append("<h1>"+secondsCount+"</h1>");
        secondsCount--;
         $("button").click(function(){
        
           if($(this).text()===questionsandAnswers[2]["answer"]){
               $("#contents").html("<h1>You Got it Right</h1>");
               correctAnswers++;
               totalnoSeconds=106;
               secondsCount=30;
               check3=false;
               check3=false;
           }
            else{
        secondsCount=30;
        totalnoSeconds=105;
        
    }
    });
    }

    if (totalnoSeconds>105 && totalnoSeconds<=110 && check3){
        $("#contents").html("<h1>You Got it Wrong</h1><br><h1>Answer: "+questionsandAnswers[2]["answer"]+"</h1>");
    secondsCount=30;
    }

//This is the fourth Question
if(totalnoSeconds>110 && totalnoSeconds<=140 && check4){
         $("#contents").html(question4);
        $("#contents").append("<h1>"+secondsCount+"</h1>");
        secondsCount--;
         $("button").click(function(){
        
           if($(this).text()===questionsandAnswers[3]["answer"]){
               $("#contents").html("<h1>You Got it Right</h1>");
               correctAnswers++;
               totalnoSeconds=141;
               secondsCount=30;
               check4=false;
               check4=false;
           }
            else{
        secondsCount=30;
        totalnoSeconds=140;
        
    }
    });
    }

    if (totalnoSeconds>140 && totalnoSeconds<=145 && check4){
        $("#contents").html("<h1>You Got it Wrong</h1><br><h1>Answer: "+questionsandAnswers[3]["answer"]+"</h1>");
    secondsCount=30;
    }


//this is the fifth question
if(totalnoSeconds>145 && totalnoSeconds<=175 && check5){
         $("#contents").html(question5);
        $("#contents").append("<h1>"+secondsCount+"</h1>");
        secondsCount--;
         $("button").click(function(){
        
           if($(this).text()===questionsandAnswers[4]["answer"]){
               $("#contents").html("<h1>You Got it Right</h1>");
               correctAnswers++;
               totalnoSeconds=176;
               secondsCount=30;
               check5=false;
               check5=false;
           }
            else{
        secondsCount=30;
        totalnoSeconds=175;
        
    }
    });
    }

    if (totalnoSeconds>175 && totalnoSeconds<=180 && check5){
        $("#contents").html("<h1>You Got it Wrong</h1><br><h1>Answer: "+questionsandAnswers[4]["answer"]+"</h1>");
    secondsCount=30;
    }



//This is the Sixth Question
if(totalnoSeconds>180 && totalnoSeconds<=210 && check6){
         $("#contents").html(question6);
        $("#contents").append("<h1>"+secondsCount+"</h1>");
        secondsCount--;
         $("button").click(function(){
        
           if($(this).text()===questionsandAnswers[5]["answer"]){
               $("#contents").html("<h1>You Got it Right</h1>");
               correctAnswers++;
               totalnoSeconds=211;
               secondsCount=30;
               check6=false;
               check6=false;
           }
            else{
        secondsCount=30;
        totalnoSeconds=210;
        
    }
    });
    }

    if (totalnoSeconds>210 && totalnoSeconds<=215 && check6){
        $("#contents").html("<h1>You Got it Wrong</h1><br><h1>Answer: "+questionsandAnswers[5]["answer"]+"</h1>");
    secondsCount=30;
    }

//this is the seventh question
if(totalnoSeconds>215 && totalnoSeconds<=245 && check7){
         $("#contents").html(question7);
        $("#contents").append("<h1>"+secondsCount+"</h1>");
        secondsCount--;
         $("button").click(function(){
        
           if($(this).text()===questionsandAnswers[6]["answer"]){
               $("#contents").html("<h1>You Got it Right</h1>");
               correctAnswers++;
               totalnoSeconds=246;
               secondsCount=30;
               check7=false;
               check7=false;
           }
            else{
        secondsCount=30;
        totalnoSeconds=245;
        
    }
    });
    }

    if (totalnoSeconds>245 && totalnoSeconds<=250 && check7){
        $("#contents").html("<h1>You Got it Wrong</h1><br><h1>Answer: "+questionsandAnswers[6]["answer"]+"</h1>");
    secondsCount=30;
    }

//this is the Eight Question
if(totalnoSeconds>250 && totalnoSeconds<=280 && check8){
         $("#contents").html(question8);
        $("#contents").append("<h1>"+secondsCount+"</h1>");
        secondsCount--;
         $("button").click(function(){
        
           if($(this).text()===questionsandAnswers[7]["answer"]){
               $("#contents").html("<h1>You Got it Right</h1>");
               correctAnswers++;
               totalnoSeconds=281;
               secondsCount=30;
               check8=false;
               check8=false;
           }
            else{
        secondsCount=30;
        totalnoSeconds=280;
        
    }
    });
    }

    if (totalnoSeconds>280 && totalnoSeconds<=285 && check8){
        $("#contents").html("<h1>You Got it Wrong</h1><br><h1>Answer: "+questionsandAnswers[7]["answer"]+"</h1>");
    secondsCount=30;
    }

//this is the ninth Question
if(totalnoSeconds>285 && totalnoSeconds<=315 && check9){
         $("#contents").html(question9);
        $("#contents").append("<h1>"+secondsCount+"</h1>");
        secondsCount--;
         $("button").click(function(){
        
           if($(this).text()===questionsandAnswers[8]["answer"]){
               $("#contents").html("<h1>You Got it Right</h1>");
               correctAnswers++;
               totalnoSeconds=316;
               secondsCount=30;
               check9=false;
               check9=false;
           }
            else{
        secondsCount=30;
        totalnoSeconds=315;
        
    }
    });
    }

    if (totalnoSeconds>315 && totalnoSeconds<=320 && check9){
        $("#contents").html("<h1>You Got it Wrong</h1><br><h1>Answer: "+questionsandAnswers[8]["answer"]+"</h1>");
    secondsCount=30;
    }

// this is the tenth question
if(totalnoSeconds>320 && totalnoSeconds<=350 && check10){
         $("#contents").html(question10);
        $("#contents").append("<h1>"+secondsCount+"</h1>");
        secondsCount--;
         $("button").click(function(){
        
           if($(this).text()===questionsandAnswers[9]["answer"]){
               $("#contents").html("<h1>You Got it Right</h1>");
               correctAnswers++;
               totalnoSeconds=351;
               secondsCount=30;
               check10=false;
               check10=false;
           }
            else{
        secondsCount=30;
        totalnoSeconds=350;
        
    }
    });
    }

    if (totalnoSeconds>350 && totalnoSeconds<=355 && check10){
        $("#contents").html("<h1>You Got it Wrong</h1><br><h1>Answer: "+questionsandAnswers[9]["answer"]+"</h1>");
    secondsCount=30;
    }

if(totalnoSeconds>355 || check10===false){
    clearInterval(setTimer);
    wrongAnswers=10-correctAnswers;
    $("#contents").html("<h1>Correct Answers: "+correctAnswers+"</h1><br><h1>Wrong Answers: "+wrongAnswers+"</h1><br><button class='btn-lg btn-default' id='endGame'>Restart Game</button>")
    $("#endGame").click(function(){
        location.reload();
    });
}

//this is the end of the MainFunction
};




    //This is the timer
        var setTimer=setInterval(mainFunction,1000);
            
        
    });
    

    
});