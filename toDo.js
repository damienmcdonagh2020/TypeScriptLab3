"use strict";
exports.__esModule = true;
var todo = /** @class */ (function () {
    function todo() {
        this.tasks = [];
    }
    todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("____________ New Task ____________");
        console.log("Tasks " + task + " inserted in the list");
        return this.tasks.length;
    };
    todo.prototype.listtAllTasks = function () {
        console.log("All items in array");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    };
    todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("______TaskRemoved______");
            console.log("Task " + task + " removed from list.");
        }
        return this.tasks.length;
    };
    return todo;
}());
var myToDO = new todo();
myToDO.addTask("Sleep");
myToDO.addTask("Wake");
myToDO.addTask("Cry");
myToDO.listtAllTasks();
myToDO.deleteTask("Cry");
