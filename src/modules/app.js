import addTask from './addTask';

const addInput = document.querySelector('.add-item input');
const returnBtn = document.querySelector('.return-button');
const taskArray = [];

const updateTaskArray = (task) => {
  taskArray.push({
    description: task,
    completed: false,
    index: taskArray.length + 1,
  });
};

returnBtn.addEventListener('click', () => {
  addTask(addInput.value);
  updateTaskArray(addInput.value);
});
