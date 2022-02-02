var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("____________ New Task ____________");
    console.log("Tasks " + task + " inserted in the list");
    return tasks.length;
}
function listtAllTasks() {
    console.log("All items in array");
    tasks.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    var index = task.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("______TaskRemoved______");
        console.log("Task " + task + " removed from list.");
    }
    return tasks.length;
}
addTask('Wake up');
addTask('Sleep');
addTask('Watch Tv');
listtAllTasks();
deleteTask('Watch Tv');
