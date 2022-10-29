// this is the moments  for the date

$(document).ready(function () {
  let NowMoment = moment().format("MMMM Do YYYY, dddd");
  $("#currentDay").text(NowMoment);

  let currentHour = moment().format("HH");

  $(".time-div").each(function () {
    var elementHour = $(this).attr("id");

    if (elementHour < currentHour) {
      
      $(this).removeClass("present")
      $(this).removeClass("future")
      $(this).addClass("past");
    } else if (elementHour == currentHour) {
      
      $(this).removeClass("past")
      $(this).removeClass("future")
      $(this).addClass("present");
    } else {
      
      $(this).removeClass("past")
      $(this).removeClass("present")
      $(this).addClass("future");
    }
  });

  $(".saveBtn").on("click", function () {
    var plannerText = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, plannerText);
  });

  $("#09 .description").val(localStorage.getItem("09"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));




  // Button function to clear local storage and clear contents
  $(".clearBtn").click(function (event) {
    event.preventDefault();
    $(".description").val("");
    localStorage.clear();
    console.log('something??????')
  });


  
});

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
