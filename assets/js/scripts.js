$(document).ready( function () {
  "use strict";


  $(".iconDiv").on("mouseover", function () { // when any iconDiv is mousovered...
    $(this).children().filter("i").attr("id", "iconHover");
    $(this).children().filter(".line").addClass("lineHover");
    $(this).children().filter(".english").addClass("englishHover");
    $(this).children().filter(".deutsch").addClass("deutschHover");
  });

  $(".iconDiv").on("mouseout", function () { // when any iconDiv is mousouted...
    $(this).children().filter("i").attr("id", "");
    $(this).children().filter(".line").removeClass("lineHover");
    $(this).children().filter(".english").removeClass("englishHover");
    $(this).children().filter(".deutsch").removeClass("deutschHover");
  });




});
