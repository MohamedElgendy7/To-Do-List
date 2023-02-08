let task_list = document.getElementsByClassName("tasks")[0];
function makeTask() {
    let mytask_input = document.getElementsByClassName("input")[0].value;
    if (mytask_input !== "") {
        let task = document.createElement("p");
        let div_task = document.createElement("div");
        let btn = document.createElement("input");
        task.className = "check";
        btn.type = "submit";
        btn.className = "add"
        btn.value = "Done"
        btn.onclick = function () {
            div_task.remove()
        }
        div_task.className = "div_task1";
        task.append(mytask_input);
        div_task.append(task);
        div_task.append(btn)
        task_list.append(div_task)
        task_list.style.backgroundImage = "url('back.jpg')";
    }
}
