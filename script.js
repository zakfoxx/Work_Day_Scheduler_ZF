function getPlan() {
  return localStorage.getItem("plan");
}

// make able to save and load to local storage
// apply past present and future classes based on time hour represents
// write loop that loops over each div - compares hour of row to hour from moment

$(".saveBtn").on("click", function () {
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  console.log(value, time);

  // save time and value to localstorage
});
