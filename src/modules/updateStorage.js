import List from './List.js';

export default () => {
  localStorage.setItem('tasks', JSON.stringify(List.taskList));
};
