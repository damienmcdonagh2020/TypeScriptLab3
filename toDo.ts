import { toDoInterFace } from "./toDoInterface";

class todo implements toDoInterFace{

    constructor(){}
    task: string[];

     tasks: Array<string>=[];

    addTask(task:string):number{
    this.tasks.push(task);
    console.log("____________ New Task ____________");
    console.log("Tasks " +task+ " inserted in the list");
    return this.tasks.length;
    }

     listtAllTasks():void{
        console.log("All items in array");
        this.tasks.forEach(function(task){
            console.log(task);
        });
    }

     deleteTask(task:string):number{
        let index:number = this.tasks.indexOf(task);
        if(index > -1){
            this.tasks.splice(index,1);
            console.log("______TaskRemoved______");
            console.log("Task " +task+ " removed from list.");
        }
        return this.tasks.length;
    }
}

let myToDO = new todo();
myToDO.addTask("Sleep");
myToDO.addTask("Wake");
myToDO.addTask("Cry");

myToDO.listtAllTasks();

myToDO.deleteTask("Cry");
