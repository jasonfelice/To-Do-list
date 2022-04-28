import addTask from './addTask.js';
import List from './List.js';
import updateStorage from './updateStorage.js';

const addInput = document.querySelector('.add-item input');
const returnBtn = document.querySelector('.return-button');

if (localStorage.tasks) {
  const storedTasks = JSON.parse(localStorage.tasks);
  storedTasks.forEach((item) => {
    List.taskList.push(new List(item.task, item.index, item.isCompleted));
    addTask(item.task, item.index, item.isCompleted);
  });
}

const updateTaskArray = (task) => {
  List.taskList.push(new List(task, List.taskList.length + 1, false));
};

returnBtn.addEventListener('click', () => {
  addTask(addInput.value, List.taskList.length + 1, false);
  updateTaskArray(addInput.value);
  updateStorage();
  addInput.value = '';
});
