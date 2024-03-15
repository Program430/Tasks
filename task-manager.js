import { EventEmitter } from 'events';
import { Task } from './task.js';
import fs from 'fs';

export class TaskManager extends EventEmitter {
  constructor() {
    super();
    this.tasks = [];
    this.tasksFile = 'tasks.json';
  }

  loadTasks() {
    const tasksData = fs.readFileSync(this.tasksFile, 'utf8');
    const tasks = JSON.parse(tasksData);

    for (let taskData of tasks) {
      const task = new Task(taskData.id, taskData.description, taskData.status);
      this.tasks.push(task);
    }
  }

  addTask(id, description, status) {
    const newTask = new Task(id, description, status);
    this.tasks.push(newTask);
    this.saveTasks();
    this.emit('taskAdded', newTask);

  }

  removeTask(taskId) {
    const taskIndex = this.tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      const removedTask = this.tasks.splice(taskIndex, 1)[0];
      this.saveTasks();
      this.emit('taskRemoved', removedTask);
    } else {
      console.log("Задача не найдена");
    }
  }

  saveTasks() {
    const tasksData = JSON.stringify(this.tasks, null, 2);
    fs.writeFileSync(this.tasksFile, tasksData);
  }

  printTasks() {
    for (let task of this.tasks) {
      console.log(task.toString());
    }
  }
}
