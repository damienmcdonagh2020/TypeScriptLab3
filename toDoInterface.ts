export interface toDoInterFace{
    task: Array<string>;
    addTask(task:string):number;
    listtAllTasks():void;
    deleteTask(task:string):number;
}