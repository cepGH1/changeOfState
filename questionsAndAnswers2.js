/* 
*CEP 2017
*question sets compared to answer sets
*single page
*each set 5 questions
 */

//counts the question set used
var qsCounter = 0;

//The tick or cross to show if answer is correct or wrong
var tick = "&#x2714";
var cross = "&#x2718";

//array to hold full set of correct ticks
var allCorrect =[tick, tick, tick, tick, tick];

//answers to first set of questions
var moleAnswers0 = [1, 1, 2, 1, 2.5];

//answers to second set of questions
var moleAnswers1 = [1.087, 1.711, 1.483, 5.077, 0.177];

//answers to third set of questions
var moleAnswers2 = [1002.776, 0.872, 0.713, 1.542, 3.330];

//answers to fourth set of questions
var moleAnswers3 = [0,0,0,0,0];

//answers to fifth set of questions
var moleAnswers4 = [0,0,0,0,0];

//array to hold the input answers
var inputAnswers = [0,0,0,0,0];
//1st set of questions
var moleQuestions0 = "<h4>Questions</h4><p>Give answers to 3 decimal places</p><p>\n\
22.99g of Sodium is <textarea  id='moleq0'></textarea> moles. <span id='moleMark0'></span>\n\
</p><p>58.44g of Sodium Chloride is <textarea  id='moleq1'></textarea> moles.<span id='moleMark1'></span>\n\
</p><p>78.196g of Potassium is <textarea id='moleq2'></textarea> moles.<span id='moleMark2'></span>\n\
</p><p>196.967g of Gold is <textarea  id='moleq3'></textarea> moles.<span id='moleMark3'></span>\n\
</p><p>140.913g of Magnesium Sulphide is <textarea id='moleq4'></textarea> moles.<span id='moleMark4'></span></p>";

//2nd set of questions
var moleQuestions1 = "<h4>Questions</h4><p>Give answers to 3 decimal places</p><p>\n\
25g of Sodium is <textarea  id='moleq0'></textarea> moles. <span id='moleMark0'></span>\n\
</p><p>100g of Sodium Chloride is <textarea  id='moleq1'></textarea> moles.<span id='moleMark1'></span>\n\
</p><p>58g of Potassium is <textarea id='moleq2'></textarea> moles.<span id='moleMark2'></span>\n\
</p><p>1000g of Gold is <textarea  id='moleq3'></textarea> moles.<span id='moleMark3'></span>\n\
</p><p>10g of Magnesium Sulphide is <textarea id='moleq4'></textarea> moles.<span id='moleMark4'></span></p>";

//2nd set of questions
var moleQuestions2 = "<h4>Questions</h4><p>Give answers to 3 decimal places</p><p>\n\
56kg of Iron have is <textarea  id='moleq0'></textarea> moles. <span id='moleMark0'></span>\n\
</p><p>65g of Potassium Chloride is <textarea  id='moleq1'></textarea> moles.<span id='moleMark1'></span>\n\
</p><p>40g of Calcium Oxide is <textarea id='moleq2'></textarea> moles.<span id='moleMark2'></span>\n\
</p><p>40g of Lithium Fluoride is <textarea  id='moleq3'></textarea> g.<span id='moleMark3'></span>\n\
</p><p>40g of Diamonds is <textarea id='moleq4'></textarea> moles of Carbon.<span id='moleMark4'></span></p>";

//when the exerciseis completed the following message appears
var exerciseEndedMessage = "Well Done! You successfully answered all the questions.";
//function to load a set of questions
function selectQuestions(){
     
   var questionSet = "Hello World";
   if(qsCounter === 0){
       questionSet = moleQuestions0;
   }
    if(qsCounter === 1){
       questionSet = moleQuestions1;
   }
   if(qsCounter === 2){
       questionSet = moleQuestions2;
   }
   if(qsCounter === 3){
       questionSet = exerciseEndedMessage;
   }
   document.getElementById("remarks").innerHTML = " " ;
    document.getElementById("questions").innerHTML = questionSet ;
}

//function to retrieve the inputted answers
function getMoleAnswers(){
    
           for (i = 0; i < moleAnswers0.length; i++) {
        var address = "moleq" + i; 
         
        var ans = document.getElementById(address).value;
        var ansFloat = parseFloat(ans);
    inputAnswers[i] = ansFloat;
    }
   
}

function setCorrectAnswers(){
    if(qsCounter ===0){
      thisSetAnswers = moleAnswers0;  
    }
        if(qsCounter ===1){
      thisSetAnswers = moleAnswers1;  
    }
         if(qsCounter ===2){
      thisSetAnswers = moleAnswers2;  
    }
}
//function to check if the answers are correct
function checkAnswers(){
     
    getMoleAnswers();
    setCorrectAnswers();
    var responses = [cross, cross, cross, cross, cross];
    //check the answer values
    for ( i=0; i<moleAnswers0.length; i++){
            if(thisSetAnswers[i] === inputAnswers[i]){
        responses[i] = tick;
    }
    else {
        responses[i] = cross;
    }
    }
    //put the appropriate mark against each answer
    for(i=0; i<moleAnswers0.length; i++){
       var reply = "moleMark" + i;
       document.getElementById(reply).innerHTML = responses[i]; 
    }
     if((responses[0]=== tick) && (responses[1]=== tick) && (responses[2] === tick)
           && (responses[3]=== tick)&& (responses[4]=== tick)){
       var celebratoryGif = "<img src='../../images/fireworks3.gif' alt='Well Done!'><br>\n\
Well Done!";
       document.getElementById("remarks").innerHTML = celebratoryGif;
       
       qsCounter = qsCounter +1;
   }
}

function moleDefinitionWindow() {
    var myWindow = window.open("../ks4chemistry/definitions/Mole.html", "myWindow", "width=800,height=500");
    
   
}
function moleHelpWindow() {
    var myWindow = window.open("../../html/helpSheets/howManyMolesHelp.html", "myWindow", "width=800,height=500");
    
   
}
function massHelpWindow() {
    var myWindow = window.open("../../html/helpSheets/howMuchMassHelp.html", "myWindow", "width=800,height=500");
    
   
}
function test(){
    document.getElementById("questions").innerHTML = "hello world";
}


