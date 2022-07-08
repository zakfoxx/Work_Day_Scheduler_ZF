function getPlan() {
  //  return localStorage.getItem("plan");
  $("#hour-9").children("textarea").val(localStorage.getItem("hour-9"));
  $("#hour-10").children("textarea").val(localStorage.getItem("hour-10"));
  $("#hour-11").children("textarea").val(localStorage.getItem("hour-11"));
  $("#hour-12").children("textarea").val(localStorage.getItem("hour-12"));
  $("#hour-13").children("textarea").val(localStorage.getItem("hour-13"));
  $("#hour-14").children("textarea").val(localStorage.getItem("hour-14"));
  $("#hour-15").children("textarea").val(localStorage.getItem("hour-15"));
  $("#hour-16").children("textarea").val(localStorage.getItem("hour-16"));
  $("#hour-17").children("textarea").val(localStorage.getItem("hour-17"));
}
getPlan();
function savePlan(thePlan, hour) {
  localStorage.setItem(hour, thePlan);
}
function colorClasses() {
  var now = moment();
  console.log(now.format("LLLL"));
  console.log(now.hour());
  $("#currentDay").text(now.format("LLLL"));
  $(".time-block").each(function () {
    console.log($(this).attr("id"));
    var currentHour = parseInt($(this).attr("id").split("-")[1]);
    console.log(typeof currentHour);
    if (currentHour === now.hour()) {
      $(this).children("textarea").addClass("present");
    } else if (currentHour < now.hour()) {
      $(this).children("textarea").addClass("past");
    } else {
      $(this).children("textarea").addClass("future");
    }
  });
}
colorClasses();
// apply past present and future classes based on time hour represents
// write loop that loops over each div - compares hour of row to hour from moment

$(".saveBtn").on("click", function () {
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  savePlan(value, time);
});
