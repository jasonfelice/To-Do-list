import { List } from './List';

const listWrapper = document.querySelector('.to-do-list');

function chkBxEvent() {
  const chkBoxes = document.querySelectorAll('.task input[type="checkbox"]');
  chkBoxes.forEach((each) => each.addEventListener('change', () => {
    const index = +(each.parentElement.parentElement.getAttribute('id')) - 1;
    List.taskList[index].toggleCompleted();
    each.parentElement.parentElement.classList.toggle('completed');
  }));
}

function chkBxEvntsClr() {
  const chkBoxes = document.querySelectorAll('.task input[type="checkbox"]');
  for (let i = 0; i < chkBoxes.length; i += 1) {
    chkBoxes[i].replaceWith(chkBoxes[i].cloneNode(true));
  }
}

export default (taskItem, index) => {
  const taskWrapper = document.createElement('div');
  taskWrapper.classList.add('list-item');
  taskWrapper.setAttribute('id', index);
  const task = document.createElement('div');
  task.classList.add('task');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  const description = document.createElement('input');
  description.setAttribute('type', 'text');
  description.classList.add('task-description');
  description.value = taskItem;
  const btnWrapper = document.createElement('div');
  const dragBtn = document.createElement('i');
  dragBtn.classList.add('drag-btn');
  const delBtn = document.createElement('i');
  delBtn.classList.add('del-btn');
  delBtn.addEventListener('click', () => {
    const theTask = delBtn.parentElement.parentElement;
    List.deleteTask(+theTask.getAttribute('id'));
    theTask.remove();
  });
  delBtn.addEventListener('click', () => {
    const listItems = document.querySelectorAll('.list-item');
    for (let i = 0; i < listItems.length; i += 1) {
      listItems[i].setAttribute('id', i + 1);
    }
  });
  btnWrapper.appendChild(dragBtn);
  btnWrapper.appendChild(delBtn);
  task.appendChild(checkbox);
  task.appendChild(description);
  taskWrapper.appendChild(task);
  taskWrapper.appendChild(btnWrapper);
  listWrapper.appendChild(taskWrapper);
  chkBxEvntsClr();
  chkBxEvent();
};
