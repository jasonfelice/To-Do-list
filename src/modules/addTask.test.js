const addTask = require('./addTask');

describe('Add/Delete items from to-do list', () => {
    describe('Add Tasks', () => {
        test('Add one new item to the list', () => {
            document.body.innerHTML =
            '<div class="to-do-list"></div>'
            addTask('Test', 1, false);
            addTask('Second Test', 1, false);
            const list = document.querySelectorAll('.list-item');
            expect(list).toHaveLength(2);
          });
    });
});