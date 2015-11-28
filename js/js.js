var counter = 1;
var pagePart = "#part";

$(document).on("mobileinit", function() {});

$(document).ready(function(ev) {
    localStorage.setItem("currentPageId", JSON.stringify(pagePart + counter));
    $("#startTut").on("click", function(ev) {
        partParse = JSON.parse(localStorage.getItem("currentPageId"));
        $("#startTut").attr("href", partParse);
    });
    //$("#part1").on("pageinit", function(ev) {
        $(".nextPage").on("click", function(ev) {
            counter += 1;
            localStorage.setItem("currentPageId", JSON.stringify(pagePart + counter));
        });
        $(".prevPage").on("click", function(ev) {
            counter -= 1;
            localStorage.setItem("currentPageId", JSON.stringify(pagePart + counter));
        });
    });
});
