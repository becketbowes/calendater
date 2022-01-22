var setStorage = function() {
    var wholeSched = [["5am", "wakeup"]];
    localStorage.setItem("oldSched", JSON.stringify(wholeSched));
};
// setStorage();
var newOldStorage = localStorage.getItem("oldSched");
if (newOldStorage == undefined) {
    setStorage();
    newOldStorage = localStorage.getItem("oldSched");
};
var wholeSched = JSON.parse(newOldStorage);
var wholeSchedLength = Object.keys(wholeSched).length;
var schedNum = (wholeSchedLength);

moment().hour();
moment().day();
moment().date();
moment().month();
moment().year();
var hour = moment().format("ha");
var funkHour = (hour-6)
console.log(hour)

// loop through with if elseif else "hour" to change class
var colorator = function() {
    var flag = false;
    $(".todo").each(function() {
        if (flag === false) {
            $(this).addClass("past");
        };

        if (flag === true) {
            $(this).addClass("future");
        };

        if ($(this).data("time") === hour) {
            $(this).addClass("present");
            flag = true;
        };
    })
};

var date = moment().format("dddd, MMMM Do, YYYY");
$(".currentDay").text(date);

//replace tasks
var replaceTasks = function () {
    $(".hour").each(function () {
        var calendarSlot = $(this).text();
        for (let i = 0; i < wholeSchedLength; i++) {
            var oldTaskTime = (wholeSched[i][0]);
            var oldTask = (wholeSched[i][1]);
            if (oldTaskTime === calendarSlot) {
                var write = $("<textarea>").addClass("textareaB").addClass("toDoMade").val(oldTask).wrapInner("p");
                $(this).siblings(".todo").append(write);
            };
        }
    });
};

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

colorator();
replaceTasks();

