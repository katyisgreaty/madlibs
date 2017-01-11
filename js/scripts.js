$(document).ready(function() {

  $("#madlib form").submit(function(event) {
    console.log("form submitted");
    var NameInput = $("input#Name").val();
    var VerbInput = $("input#Verb").val();
    var RoomInput= $("input#Room").val();
    var NounInput = $("input#Noun").val();
    var PartInput = $("input#Part").val();

    $(".Name").append(NameInput);
    $(".Verb").text(VerbInput);
    $(".Room").text(RoomInput);
    $(".Noun").text(NounInput);
    $(".Part").text(PartInput);

    $(".story").show();
    //
    event.preventDefault();
  });

});
