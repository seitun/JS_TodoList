

// Use clicked on this
// If there is some text on the input, add it to TOdo list. 
document.getElementById("addItem").addEventListener("click", () => {
    var itemVal = document.getElementById("item").value;
    // if (!itemVal==""){function}<--this is also ok.
    if (itemVal) {
        addTaskList(itemVal);
        // reset the itemVal
        document.getElementById("item").value = "";
    }
});
// add new tasks to taskList. 
var addTaskList = (text) => {
    //create new task item.
    var taskList = document.getElementById("taskList");
    var item = document.createElement("li");
    item.classList.add("tasks")
    item.innerText = text;
    var buttons = document.createElement("div")
    buttons.classList.add("btns");

    // add classes of remove button
    var remove = document.createElement("i");
    remove.classList.add("btn");
    remove.classList.add("remove");
    remove.classList.add("far");
    remove.classList.add("fa-trash-alt");
    // add event to remove (click)
    remove.addEventListener("click", removeItem);
    // add classes of complete button 
    var complete = document.createElement("i");
    complete.classList.add("btn");
    complete.classList.add("complete");
    complete.classList.add("fas");
    complete.classList.add("fa-check");
    // add event to complete button
    complete.addEventListener("click", moveToDone);
    // insert each element to parent node. 
    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);
    taskList.insertBefore(item, taskList.childNodes[0]);
};

var removeItem = (event) => {
    // using "this" is better.
    // if I wanna remove an element, i must refer the Parent Node, and then remove from the element as the child Node. 
    let task = event.target.parentNode.parentNode;
    let parent = task.parentNode;
    parent.removeChild(task);
}
var moveToDone = (event) => {
    // first, remove, and then, add to done list
    let task = event.target.parentNode.parentNode;
    let parent = task.parentNode;
    var id = parent.id;
    var doneList = document.getElementById("doneList");
    var targetList = (id === "taskList") ? doneList : taskList;
    parent.removeChild(task);
    targetList.insertBefore(task, targetList.childNodes[0]);
    // I can wirite switch syntax, but it is not simple.
    // switch (id) {
    //     case "taskList":
    //         parent.removeChild(task);
    //         doneList.insertBefore(task, doneList.childNodes[0]);
    //         break;
    //     case "doneList":
    //         parent.removeChild(task);
    //         taskList.insertBefore(task, taskList.childNodes[0]);
    //         break;
    //     default:
    //         break;
    // }

}


