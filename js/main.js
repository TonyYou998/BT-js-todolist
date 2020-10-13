

var taskList = new TaskList();
var taskListCompleted = new TaskList();
// var kiemTra = new Validation();
var kiemTra = new Validation();
getLocalStorage();
getLocalStorage2();

getElement("addItem").addEventListener("click", function () {

    var newTaskConTent = getElement("newTask").value;
    var taskName = getElement("todo").value;
    var id = Math.random();
    var status = "todo";
    var task = new Task(id, newTaskConTent, status);
    var isValid = false;
    // console.log(taskList);
    isValid = kiemTra.kiemTraRong(newTaskConTent, "notiInput", "chưa nhập nội dung") && kiemTra.kiemTraTrung(newTaskConTent, "notiInput", "task bị trùng", taskList);

    // isValid = kiemTra.kiemTraTrung(newTaskConTent, "notiInput", "task bị trùng", taskList);
    console.log(isValid);

    // kiemTra.kiemTraTrung(newTaskConTent, "notiInput", "task bị trùng", taskList);

    // console.log(taskList.arr.length);
    if (!isValid)
        return;
    taskList.addTask(task, "todo");

    taoList(taskList.arr);

    setLocoalStorage();







});

// console.log(taskList);
function taoList(arr) {
    var content = "";
    // console.log(status);
    arr.forEach(function (item) {

        content += `
            
               <li>
                   <span> ${item.taskName}</span>
                    <div class="button">
                        <button class="remove " onclick="deleteTask('${item.id}')">
                            <i class="fa fa-trash-alt"></i>
                        </button>
                        <button class="complete" onclick="changeStatus('${item.id}')">
                            <i class="far fa-check-circle"></i>
                            
                        </button>
                    </div>
               
               
               </li>
                
            
            
            
        
        `;
    });

    console.log(status);
    // getElement(status).innerHTML = content;
    document.getElementById("todo").innerHTML = content;
}


function deleteTask(id) {

    taskList.deleteTask(id);
    taoList(taskList.arr);
    setLocoalStorage();

}

function changeStatus(id) {


    var task = taskList.getTaskbyId(id);
    var taskCompleted = taskListCompleted.getTaskbyId(id);
    console.log(taskCompleted);
    if (task != undefined) {
        task.status = "completed";
        deleteTask(id);
        taskListCompleted.addTask(task);
        taoListCompleted(taskListCompleted.arr);
        setLocoalStorage2();
    }
    else {
        taskCompleted.status = "todo";
        deleteTaskCompleted(id);
        taskList.addTask(taskCompleted);
        taoList(taskList.arr);
        setLocoalStorage();


    }






}
function setLocoalStorage() {
    localStorage.setItem("TaskList", JSON.stringify(taskList.arr));

}
function setLocoalStorage2() {
    localStorage.setItem("TaskListCompleted", JSON.stringify(taskListCompleted.arr));
}
function getLocalStorage() {
    if (localStorage.getItem("TaskList"))
        taskList.arr = JSON.parse(localStorage.getItem("TaskList"));




    taoList(taskList.arr);

}
function getLocalStorage2() {
    if (localStorage.getItem("TaskListCompleted"))
        taskListCompleted.arr = JSON.parse(localStorage.getItem("TaskListCompleted"));
    taoListCompleted(taskListCompleted.arr);





}
function taoListCompleted(arr) {
    var content = "";
    arr.forEach(function (item) {
        content += `
        <li>
            <span> ${item.taskName}</span>
            <div class="button">
                 <button class="remove" onclick="deleteTaskCompleted('${item.id}')">
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="complete" onclick="changeStatus('${item.id}')">
                     <i class="far fa-check-circle"></i>
                 
                </button>
            </div>
    
    
        </li>
        
        
        `;
    });
    document.getElementById("completed").innerHTML = content;

}
function deleteTaskCompleted(id) {

    taskListCompleted.deleteTask(id);
    taoListCompleted(taskListCompleted.arr);
    setLocoalStorage2();
}
function getElement(id) {
    return document.getElementById(id);
}