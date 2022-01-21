var sched = [];
var schedulerBtnL = document.getElementsByClassName("calendater")
const dateTime = Temporal.Now.plainDateTimeISO()
dateTime.toString()



var loadSched = function() {
    oldSched = JSON.parse(localStorage.getItem("savedSched"))
    if (!savedSched) {
        
    } else {
       for (let i=0; i > oldSched.length, i++) {

       }
    };
};

var saveSched = function() {

}


// 

// replace p element with a new textarea
var makeToDo = function() {
    $(".saveBtn").om("click", fucntion() {
        var toDoTime = $(this).siblings("#time").string
        var toDoThing = $(this).siblings("#todo").string
        console.log("New To Do", toDoTime, toDoThing);
    })
    // var textInput = $("<textarea>").addClass("textarea").val(text);
    // $(this).replaceWith(textInput);
}




schedulerBtnL.addEventListener("click", makeToDo)

//design the layout
//make text fields editable
//save text fields in local storage and div
//get current date
//display date in header
//adjust background to reflect current date