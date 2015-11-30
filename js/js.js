//var counter = 1;
//var pagePart = "#part";

$(document).on("mobileinit", function() {});

$(document).ready(function(ev) {
    
    for (i = 1; i < 10; i++){
    $("#part"+i).on("pageinit", function(){
       localStorage.setItem("currentPageId", JSON.stringify("#part"+i));
       $("#startTut").on("click", function(ev) {
        partParse = JSON.parse(localStorage.getItem("currentPageId"));
        $("#startTut").attr("href", partParse);
       });
    });
});


