var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
var days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
var day = days[now.getDay];
today = mm + "/" + dd + "/" + yyyy;
document.write(today);

// make able to save and load to local storage
// apply past present and future classes based on time hour represents
// write loop that loops over each div - compares hour of row to hour from moment
