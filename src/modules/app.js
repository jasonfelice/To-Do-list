import addTask from './addTask.js';
import List from './List.js';
import updateStorage from './updateStorage.js';

const addInput = document.querySelector('.add-item input');
const returnBtn = document.querySelector('.return-button');
const clearButton = document.getElementById('clearCompleted');
const createTaskInput = document.querySelector('#create-task');

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

createTaskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask(addInput.value, List.taskList.length + 1, false);
    updateTaskArray(addInput.value);
    updateStorage();
    addInput.value = '';
  }
});

clearButton.addEventListener('click', (e) => {
  e.preventDefault();
  const allTasks = document.querySelectorAll('.list-item');
  allTasks.forEach((item) => {
    if (item.classList.value.includes('completed')) {
      item.remove();
      List.deleteCompleted();
    }
  });
  updateStorage();
  const listItems = document.querySelectorAll('.list-item');
  for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].setAttribute('id', i + 1);
  }
});
