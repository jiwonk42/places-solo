//business logic
function Places(location, landmarks, time, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}

function resetFields() {
  $("input#new-location").val("");
  $("input#new-landmarks").val("");
  $("input#new-time").val("");
  $("input#new-notes").val("");
}

//user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var location = $("input#new-location").val();
    var landmarks = $("input#new-landmarks").val();
    var time = $("input#new-time").val();
    var notes = $("input#new-notes").val();

    var place = new Places(location, landmarks, time, notes);

    resetFields();

    $("ul#places").append("<li><span class='new-place'>" + place.location + "</span></li>");

    $("li .new-place").last().click(function() {
      $("#show-place").show();
      $(".location").text(place.location);
      $(".landmarks").text(place.landmarks);
      $(".time").text(place.time);
      $(".notes").text(place.notes);
    });
  });
});
