import fs from 'fs';
import http from 'http';
import {TaskManager} from './task-manager.js';

const server = http.createServer((req, res) => {
    fs.readFile('tasks.json', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end("Error reading file.");
            return;
        }
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(data);
    });
});


server.listen(3000, () => {

    console.log("Server running at http://localhost:3000/");

});

const todoList = new TaskManager();
todoList.loadTasks();

todoList.on('taskAdded', (task) => {
    console.log(`New task created: ${task.description}`);
});

todoList.on('taskRemoved', (task) => {
    console.log(`Task delited: ${task.description}`);
});

// Добавление задачи
todoList.addTask(12, "Новая задача", false);
todoList.removeTask(12);
