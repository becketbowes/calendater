
//make tasks
$(".todo").click(function () {
    var write = $("<textarea>").addClass("textarea").addClass("toDoMade").val("").wrapInner("p");
    $(this).append(write);
    write.trigger("focus");
    $(this).siblings(".saveBtn").addClass("bg-danger");
});



//edit tasks
$(".toDoMade").click(function () {
    var write = $("<textarea>").addClass("toDoMade").val("").wrapInner("p");
    $(this).replaceWith(write);
    write.trigger("focus");
    $(this).siblings(".saveBtn").addClass("bg-danger");
});

//save tasks
$(".saveBtn").click(function () {
    $(this).removeClass("bg-danger");
    var hourItems = $(this).siblings(".todo").children(".toDoMade").length;
    var schedTime = $(this).siblings(".hour").text();
    var schedItems = $(this).siblings(".todo").children(".toDoMade").each.val();
    var schedHour = [schedTime, schedItems];
    localStorage.setItem("oldSched", JSON.stringify(schedHour));

});

//retrieve oldSched and put it on the slate


// $(".todo").on("click", "div", function() {
//     console.log("click");


// });


// var sched = [];
// var theSched = document.getElementById('theDay');



// var makeToDo = function () {
//     var toDoTime = $(this).siblings("#time").string;
//     var toDoThing = $(this).siblings("#todo").string;
//     console.log("New To Do", toDoTime, toDoThing);
// };

// var clicker = function () {
//     console.log("click");
// };





// var writeToDo = function () {
//     var typeField = document.createElement("input", "type: 'text'");
//     typeField.setAttribute("class", "textarea");
//     $(this)div.appendChild(typeField);
//     $(this).siblings(".saveBtn").on("click", makeToDo);
// };

// theSched.addEventListener("click");



//design the layout
//make text fields editable
//save text fields in local storage and div
//get current date
//display date in header
//adjust background to reflect current date

// const dateTime = Temporal.Now.plainDateTimeISO();
// dateTime.toString();



// var loadSched = function() {
//     oldSched = JSON.parse(localStorage.getItem("savedSched"))
//     if (!savedSched) {

//     } else {
//        for (let i=0; i > oldSched.length, i++) {

//        }
//     };
// };

// var saveSched = function() {

// }


// 

// replace p element with a new textarea


// var textInput = $("<textarea>").addClass("textarea").val(text);
// $(this).replaceWith(textInput);