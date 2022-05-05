import List from './List.js';
import updateStorage from './updateStorage.js';

export default function addTask(taskItem, index, boo) {
  const listWrapper = document.querySelector('.to-do-list');
  const taskWrapper = document.createElement('div');
  taskWrapper.classList.add('list-item');
  taskWrapper.setAttribute('id', index);
  const task = document.createElement('div');
  task.classList.add('task');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  if (boo) {
    checkbox.setAttribute('checked', '');
    taskWrapper.classList.toggle('completed');
  }
  const description = document.createElement('input');
  description.setAttribute('type', 'text');
  description.classList.add('task-description');
  description.value = taskItem;
  description.addEventListener('input', (e) => {
    const desInput = e.target;
    List.taskList[+(desInput.parentElement.parentElement.getAttribute('id') - 1)].updateTask(desInput.value);
    updateStorage();
  });
  const btnWrapper = document.createElement('div');
  const dragBtn = document.createElement('i');
  dragBtn.classList.add('drag-btn');
  const delBtn = document.createElement('i');
  delBtn.classList.add('del-btn');
  delBtn.addEventListener('click', () => {
    const theTask = delBtn.parentElement.parentElement;
    List.deleteTask(+theTask.getAttribute('id'));
    theTask.remove();
    updateStorage();
  });
  delBtn.addEventListener('click', () => {
    const listItems = document.querySelectorAll('.list-item');
    for (let i = 0; i < listItems.length; i += 1) {
      listItems[i].setAttribute('id', i + 1);
    }
  });
  description.addEventListener('focus', () => {
    taskWrapper.classList.toggle('field-focus');
    delBtn.style.display = 'block';
    dragBtn.style.display = 'none';
  });
  description.addEventListener('blur', () => {
    setTimeout(() => {
      taskWrapper.classList.toggle('field-focus');
      delBtn.style.display = 'none';
      dragBtn.style.display = 'block';
    }, 100);
  });
  checkbox.addEventListener('change', (e) => {
    const checkParent = e.target.parentElement.parentElement;
    const index = +checkParent.getAttribute('id') - 1;
    List.taskList[index].toggleCompleted();
    checkParent.classList.toggle('completed');
    updateStorage();
  });
  btnWrapper.appendChild(dragBtn);
  btnWrapper.appendChild(delBtn);
  task.appendChild(checkbox);
  task.appendChild(description);
  taskWrapper.appendChild(task);
  taskWrapper.appendChild(btnWrapper);
  listWrapper.appendChild(taskWrapper);
}