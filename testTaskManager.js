import {TaskManager} from './task-manager.js';

const taskManager = new TaskManager();
taskManager.loadTasks();
taskManager.printTasks();