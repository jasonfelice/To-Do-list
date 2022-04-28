import addTask from './addTask';
import { List } from './List';

const addInput = document.querySelector('.add-item input');
const returnBtn = document.querySelector('.return-button');

const updateTaskArray = (task) => {
  List.taskList.push(new List(task, List.taskList.length + 1, false));
};

returnBtn.addEventListener('click', () => {
  addTask(addInput.value, List.taskList.length + 1);
  updateTaskArray(addInput.value);
  addInput.value = '';
});
