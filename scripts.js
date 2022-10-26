// this is the moments  for the date 

$(document).ready(function () {
  let NowMoment = moment().format("MMMM Do YYYY, dddd");
  $( "#currentDay" ).text( NowMoment)


  // this will store the hours 
  let currentHour = moment().format("HH");


//  this will store the variables for the attributes in the html for the time 
   
  var hour9 = $("#09").attr('id')
  var hour10 = $("#10").attr('id')
  var hour11 = $("#11").attr('id')
  var hour12 = $("#12").attr('id')
  var hour13 = $("#13").attr('id')
  var hour14 = $("#14").attr('id')
  var hour15 = $("#15").attr('id')
  var hour16 = $("#16").attr('id')
  var hour17 = $("#17").attr('id')

  
  var nineDiv = document.getElementById('hours-9')
  var tenDiv = document.querySelector('hours-10')
  var elevenDiv = document.querySelector('hours-11')
  var twelveDiv = document.querySelector('hours-12')
  var thirteenDiv = document.querySelector('hours-13')
  var fourteenDiv = document.querySelector('hours-14')
  var fifteenDiv = document.querySelector('hours-15')
  var sixteenDiv = document.querySelector('hours-16')
  var seventeenDiv = document.querySelector('hours-17')
  
// this is the variables that will be used to get the button on click for each textarea 

  var nineAmText = document.querySelector('.hour-09')
  var tenAmText = document.querySelector('.hour-10')
  var elevenAmText = document.querySelector('.hour-11')
  var twelveAmText = document.querySelector('.hour-12')
  var thirteenAmText = document.querySelector('.hour-13')
  var fourteenAmText = document.querySelector('.hour-14')
  var fifteenAmText = document.querySelector('.hour-15')
  var sixteenAmText = document.querySelector('.hour-16')
  var seventeenAmText = document.querySelector('.hour-17')



// these are the varibles for the buttons 

  var nineBtn = document.getElementById('#09-btn')
  var tenBtn = document.getElementById('#10-btn')
  var elevenBtn = document.getElementById('#11-btn')
  var twelveBtn = document.getElementById('#12-btn')
  var thirteenBtn = document.getElementById('#13-btn')
  var fourteenBtn = document.getElementById('#14-btn')
  var fifteenBtn = document.getElementById('#15-btn')
  var sixteenBtn = document.getElementById('#16-btn')
  var seventeenBtn = document.getElementById('#17-btn')


  // this is the array to be used to loop threw the  hours to get the right colors to show for the corresponding time 

  var hoursArrayInputs = [[09,nineDiv], [10, tenDiv], [11,elevenDiv], [12, twelveDiv], [13,thirteenDiv], [14,fourteenDiv] [15,fifteenDiv], [16,sixteenDiv], [17,seventeenDiv]];


  // this is the loop for the hours and the colors to show 
  
  for (var i=0; i<hoursArrayInputs.length ; i++){
    if (hoursArrayInputs[i][0] == currentHour) {
      hoursArrayInputs[i][1].addClass('present')
    }  
    if (hoursArrayInputs[i][0]< currentHour){
        hoursArrayInputs[i][1].addClass('past')
      } 
       if ((hoursArrayInputs[i][0]> currentHour)){
        hoursArrayInputs[i][1].addClass('future')
      } 
    }
  
  
  
    
});
  
  
  
  
  
  
  
  //   for (var i=0; i<hoursArrayInputs.length ; i++);
  // if (hoursArrayInputs[i][0] == currentHour) {
  //   hoursArrayInputs[i][2].classList.add('.present');
  //   if (hoursArrayInputs[i][0]< currentHour){
  //     hoursArrayInputs[i][2].classList.add('.past')
  //   if (hoursArrayInputs[i][0]> currentHour){
  //     hoursArrayInputs[i][2].classList.add('.future')
  //   }
  //   for (var i=0; i<hoursArrayInputs.length ; i++);
  // if (hoursArrayInputs[i][0] == currentHour) {
  //   hoursArrayInputs[i][3].classList.add('.present');
  //   if (hoursArrayInputs[i][0]< currentHour){
  //     hoursArrayInputs[i][3].classList.add('.past')
  //   if (hoursArrayInputs[i][0]> currentHour){
  //     hoursArrayInputs[i][3].classList.add('.future')
  //   }
  //   for (var i=0; i<hoursArrayInputs.length ; i++);
  // if (hoursArrayInputs[i][0] == currentHour) {
  //   hoursArrayInputs[i][4].classList.add('.present');
  //   if (hoursArrayInputs[i][0]< currentHour){
  //     hoursArrayInputs[i][4].classList.add('.past')
  //   if (hoursArrayInputs[i][0]> currentHour){
  //     hoursArrayInputs[i][4].classList.add('.future')
  //   }
  //   for (var i=0; i<hoursArrayInputs.length ; i++);
  // if (hoursArrayInputs[i][0] == currentHour) {
  //   hoursArrayInputs[i][5].classList.add('.present');
  //   if (hoursArrayInputs[i][0]< currentHour){
  //     hoursArrayInputs[i][5].classList.add('.past')
  //   if (hoursArrayInputs[i][0]> currentHour){
  //     hoursArrayInputs[i][5].classList.add('.future')
  //   }
  //   for (var i=0; i<hoursArrayInputs.length ; i++);
  // if (hoursArrayInputs[i][0] == currentHour) {
  //   hoursArrayInputs[i][6].classList.add('.present');
  //   if (hoursArrayInputs[i][0]< currentHour){
  //     hoursArrayInputs[i][6].classList.add('.past')
  //   if (hoursArrayInputs[i][0]> currentHour){
  //     hoursArrayInputs[i][6].classList.add('.future')
  //   }
  //   for (var i=0; i<hoursArrayInputs.length ; i++);
  // if (hoursArrayInputs[i][0] == currentHour) {
  //   hoursArrayInputs[i][7].classList.add('.present');
  //   if (hoursArrayInputs[i][0]< currentHour){
  //     hoursArrayInputs[i][7].classList.add('.past')
  //   if (hoursArrayInputs[i][0]> currentHour){
  //     hoursArrayInputs[i][7].classList.add('.future')
  //   }
  //   for (var i=0; i<hoursArrayInputs.length ; i++);
  // if (hoursArrayInputs[i][0] == currentHour) {
  //   hoursArrayInputs[i][8].classList.add('.present');
  //   if (hoursArrayInputs[i][0]< currentHour){
  //     hoursArrayInputs[i][8].classList.add('.past')
  //   if (hoursArrayInputs[i][0]> currentHour){
  //     hoursArrayInputs[i][8].classList.add('.future')
  //   }
  //   for (var i=0; i<hoursArrayInputs.length ; i++);
  // if (hoursArrayInputs[i][0] == currentHour) {
  //   hoursArrayInputs[i][9].classList.add('.present');
  //   if (hoursArrayInputs[i][0]< currentHour){
  //     hoursArrayInputs[i][9].classList.add('.past')
  //   if (hoursArrayInputs[i][0]> currentHour){
  //     hoursArrayInputs[i][9].classList.add('.future')
  //   }



 //teacher's note: repetitive, how can i refactor?   

  // if (currentHour === hour6) {
  //   $(".hour-09").css("background-color", "red");
  //   $(".hour-10, .hour-11, .hour-12, .hour-13, .hour-14, .hour-15, .hour-16, .hour-17").css("background-color", "green");
  // } 
  
  // if (currentHour === hour10) {
  //   $(".hour-09").css("background-color", "gray");
  //   $(".hour-10").css("background-color", "red");
  //   $(" .hour-11, .hour-12, .hour-13, .hour-14, .hour-15, .hour-16, .hour-17").css("background-color", "green");
  // } 
  
  // if (currentHour === hour11) {
  //   $(".hour-09, .hour-10").css("background-color", "gray");
  //   $(".hour-11").css("background-color", "red");
  //   $(".hour-12, .hour-13, .hour-14, .hour-15, .hour-16, .hour-17").css("background-color", "green");
  // } 
  // if (currentHour === hour12) {
  //   $(".hour-09, .hour-10, .hour-11" ).css("background-color", "gray");
  //   $(".hour-12").css("background-color", "red");
  //   $(".hour-13, .hour-14, .hour-15, .hour-16, .hour-17").css("background-color", "green");
  // } 
  // if (currentHour === hour13) {
  //   $(".hour-09, .hour-10, .hour-11, .hour-12" ).css("background-color", "gray");
  //   $(".hour-13").css("background-color", "red");
  //   $(" .hour-14, .hour-15, .hour-16, .hour-17").css("background-color", "green");
  // } 
  // if (currentHour === hour14) {
  //   $(".hour-09, .hour-10, .hour-11, .hour-12 .hour-13" ).css("background-color", "gray");
  //   $(".hour-14").css("background-color", "red");
  //   $(" .hour-15, .hour-16, .hour-17").css("background-color", "green");
  // } 
  // if (currentHour === hour15) {
  //   $(".hour-09, .hour-10, .hour-11, .hour-12 .hour-13 .hour-14" ).css("background-color", "gray");
  //   $(".hour-15").css("background-color", "red");
  //   $(" .hour-16, .hour-17").css("background-color", "green");
  // } 
  // if (currentHour === hour16) {
  //   $(".hour-09, .hour-10, .hour-11, .hour-12 .hour-13 .hour-14 .hour-15" ).css("background-color", "gray");
  //   $(".hour-16").css("background-color", "red");
  //   $(" .hour-17").css("background-color", "green");
  // } 
  // if (currentHour === hour17) {
  //   $(".hour-09, .hour-10, .hour-11, .hour-12 .hour-13 .hour-14 .hour-15 .hour-16" ).css("background-color", "gray");
  //   $(".hour-17").css("background-color", "red");
    
  // console.log(hoursArray);

  // }

//   var input
//   //-------------------------------------  need 8 buttons button on click to save to local Storage




// $(".saveBtn").click(function(event){
// event.preventDefault();

// // var userInput = $(this).attr(".text-block").val()


// // var text =  $(this).find(".val-10am").val();
// add the array and the c
//  localStorage.setItem();
// document.getElementById(".description ").innerHTML = localStorage.getItem("");
// var time = 


// console.log ("clicked",  timeValueDiv)
// // localStorage.setItem(timeValueDiv, time );



// })

 
// Button function to clear local storage and clear contents

// $("").click(function (event) {
//   event.preventDefault();
  
//   localStorage.clear();
// });


//retrieves items from local storage and sets them in proper places

// $("#hours-09 .time-block").val(localStorage.getItem("09"));
// $("#hours-10 .time-block").val(localStorage.getItem("10"));
// $("#hours-11 .time-block").val(localStorage.getItem("11"));
// $("#hours-12 .time-block").val(localStorage.getItem("12"));
// $("#hours-13 .time-block").val(localStorage.getItem("13"));
// $("#hours-14 .time-block").val(localStorage.getItem("14"));
// $("#hours-15 .time-block").val(localStorage.getItem("15"));
// $("#hours-16 .time-block").val(localStorage.getItem("16"));
// $("#hours-17 .time-block").val(localStorage.getItem("17"));





  

  // });







