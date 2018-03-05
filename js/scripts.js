// BUSINESS LOGIC

var leapYear = function(year) {
  return false;
};


// UI LOGIC

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#results").text(result);
  });
});
