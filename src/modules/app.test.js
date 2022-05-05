import addTask from './addTask';

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
            addTask('Second Test', 1, false);
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
            addTask('Second Test', 1, false);
            document.querySelector('.del-btn').click();
            const list = document.querySelectorAll('.list-item');
            expect(list).toHaveLength(1);
          });
    });
});