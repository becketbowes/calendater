var schedNum = 0;
const wholeSched = {};

moment().hour();
moment().day();
moment().date();
moment().month();
moment().year();

var date = moment().format("dddd, MMMM Do, YYYY");
$(".currentDay").text(date);



//TODO fix this so it places remembered tasks in right slots!!!
//replace tasks
var replaceTasks = function () {
    var x = 0
    var previouslyOn = JSON.parse(localStorage.getItem("oldSched"));
    previouslyOnLength = Object.keys(previouslyOn).length
    console.log(previouslyOnLength);
    $(".hour").each(function () {
        var oldTaskTime = (previouslyOn[x][0]);
        var oldTask = (previouslyOn[x][1]);
        var calendarSlot = $(".hour").text();
        if (oldTaskTime = calendarSlot) {
            var write = $("<textarea>").addClass("textareaB").addClass("toDoMade").val(oldTask).wrapInner("p");
            $(this).siblings(".todo").append(write);
        };
        // return(!(x<previouslyOnLength));
        x++;
    });
};

//
// make tasks
$(".todo").click(function () {
    var write = $("<textarea>").addClass("textareaB").addClass("toDoMade").val("").wrapInner("p");
    $(this).append(write);
    write.trigger("focus");
    $(this).siblings(".saveBtn").addClass("bg-danger");
});

//TODO use place 
//save tasks
$(".saveBtn").click(function () {
    $(this).removeClass("bg-danger");
    // var hourItems = $(this).siblings(".todo").children(".toDoMade").length;
    var schedTime = $(this).siblings(".hour").text();
    var schedItems = $(this).siblings(".todo").children(".toDoMade").val();
    wholeSched[schedNum] = [schedTime, schedItems];
    schedNum++;
    localStorage.setItem("oldSched", JSON.stringify(wholeSched));
});

replaceTasks();


var replaceTasks = function () {
    var x = 0
    var previouslyOn = JSON.parse(localStorage.getItem("oldSched"));
    previouslyOnLength = Object.keys(previouslyOn).length
    console.log(previouslyOnLength);
    var oldTaskTime = (previouslyOn[x][0]);
    var oldTask = (previouslyOn[x][1]);
    jQuery.each(function( previouslyOnLength, oldTaskTime ) {
        var write = $("<textarea>").addClass("textareaB").addClass("toDoMade").val(oldTask).wrapInner("p");
        $("#" + oldTaskTime).siblings(".todo").append(write);
    });
    x++
};