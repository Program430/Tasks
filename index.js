import chalk from 'chalk';

let tasks = [
    { id: 1, description: "Выучить JavaScript", status: "In progress" },
    { id: 2, description: "Закончить проект", status: "Completed" },
    { id: 3, description: "Устроиться на новую работу", status: "Not started" }
  ];


  function printTasks(array) {
    for (let task of array) {
      console.log(task);
    }
  }

  // Обычные сообщения - синий цвет
  console.log(chalk.blue('Это обычное сообщение.'));
  
  // Сообщения об ошибках - красный цвет
  console.log(chalk.red('Это сообщение об ошибке.'));

printTasks(tasks);


//2 laba

import {Task} from './task.js'

let task1 = new Task(1, "Выучить JavaScript", "In progress");
let task2 = new Task(2, "Закончить проект", "In progress");
let task3 = new Task(3, "Устроиться на новую работу", "Not started");

console.log(task1.toString());
