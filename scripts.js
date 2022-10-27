// this is the moments  for the date

$(document).ready(function () {
  let NowMoment = moment().format("MMMM Do YYYY, dddd");
  $("#currentDay").text(NowMoment);

  //  this will store the variables for the attributes in the html for the time

  var nineDiv = $("hours-9");
  var tenDiv = $("hours-10");
  var elevenDiv = $("hours-11");
  var twelveDiv = $("hours-12");
  var thirteenDiv = $("hours-13");
  var fourteenDiv = $("hours-14");
  var fifteenDiv = $("hours-15");
  var sixteenDiv = $("hours-16");
  var seventeenDiv = $("hours-17");

  // this is the array to be used to loop threw the  hours to get the right colors to show for the corresponding time

  var hoursArrayInputs = [
    [09, nineDiv],
    [10, tenDiv],
    [11, elevenDiv],
    [12, twelveDiv],
    [13, thirteenDiv],
    [14, fourteenDiv][(15, fifteenDiv)],
    [16, sixteenDiv],
    [17, seventeenDiv],
  ];

  // this  is a loop in jquery changes the colors with when the time is in the past present future

  let currentHour = moment().format("HH");

  $(".time-div").each(function () {
    var elementHour = $(this).attr("id");

    if (elementHour < currentHour) {
      $(this).removeClass(["present", "future"]).addClass("past");
    } else if (elementHour == currentHour) {
      $(this).removeClass(["past", "future"]).addClass("present");
    } else {
      $(this).removeClass(["past", "present"]).addClass("future");
    }
  });

  $(".saveBtn").on("click", function () {
    var plannerText = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, plannerText);
  });

  $("#09 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));




  // Button function to clear local storage and clear contents
  $("#clearBtn").click(function (event) {
    event.preventDefault();
    $("textarea").val("");
    localStorage.clear();
  });
// the saved events are suposed to persist but 2 of myne do not and the clear button dose not work =====================================================================

  
});


// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively
// Acceptance Criteria
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
