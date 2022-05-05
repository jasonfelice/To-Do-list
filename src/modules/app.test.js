import addTask from './addTask.js';
import List from './List.js';

describe('Add/Delete items from to-do list', () => {
    describe('Add/Delete Tasks', () => {
        test('Add one new item to the list', () => {
            document.body.innerHTML = `
            <div class="to-do-list"></div>
            <i class="return-button">
            <input id="create-task" type="text">
            <a href="#" id="clearCompleted"></a>
            `;

            require('./app.js')

            const returnBtn = document.querySelector('.return-button');
            const createTaskInput = document.querySelector('#create-task');
            const clearButton = document.getElementById('clearCompleted')
            addTask('Test', 1, false);
            addTask('Second Test', 2, false);
            const list = document.querySelectorAll('.list-item');
            expect(list).toHaveLength(2);
        });
        test('Delete item from the list', () => {
            document.body.innerHTML = `
            <div class="to-do-list"></div>
            <i class="return-button">
            <input id="create-task" type="text">
            <a href="#" id="clearCompleted"></a>
            `;

            require('./app.js')

            const returnBtn = document.querySelector('.return-button');
            const createTaskInput = document.querySelector('#create-task');
            const clearButton = document.getElementById('clearCompleted')
            addTask('Test', 1, false);
            addTask('Second Test', 2, false);
            document.querySelector('.del-btn').click();
            const list = document.querySelectorAll('.list-item');
            expect(list).toHaveLength(1);
        });
    });
    describe('Testing edit, update and clear', () => {
      test('Testing clear completed', () => {
          document.body.innerHTML = `
          <div class="to-do-list"></div>
          <i class="return-button">
          <input id="create-task" type="text">
          <a href="#" id="clearCompleted"></a>
          `;
          require('./app.js')
          const returnBtn = document.querySelector('.return-button');
          const createTaskInput = document.querySelector('#create-task');
          const clearButton = document.getElementById('clearCompleted')
          addTask('Piano lessons', 1, true);
          addTask('Clean the room', 2, false);
          addTask('Laundry', 3, true);
          addTask('Go shopping', 4, true);
          const list = document.querySelectorAll('.list-item');
          list.forEach((item) => {
              if (item.classList.value.includes('completed')) {
                  item.remove();
              }
          });
          const Newlist = document.querySelectorAll('.list-item')
          expect(Newlist).toHaveLength(1);
      });
      test('Changing completed status', () => {
          require('./app.js')
          List.taskList.push(new List('Walk the dogs', 1, false));
          List.taskList[0].toggleCompleted();
          expect(List.taskList[0].isCompleted).toBe(true);
      });
      test('Update task description', () => {
          require('./app.js')
          List.taskList.push(new List('Go shopping', 1, false));
          List.taskList[0].updateTask('Go for a walk')
          expect(List.taskList[0].task).toBe('Go for a walk');
      });
  });
});