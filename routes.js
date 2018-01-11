'use strict';

module.exports = function (app) {
    var task = require('./controllers/taskController');
    app.route('/tasks')
        .get(task.list_all_tasks)
        .post(task.create_a_task);

    app.route('/tasks/:taskId')
        .get(task.read_a_task)
        .put(task.update_a_task)
        .delete(task.delete_a_task);

    var book = require('./controllers/bookController');
    app.route('/books')
        .get(book.getAll)
        .post(book.create)
        .put()
        .delete();

    app.route('/books/:id')
        .get(book.getOne)
        .post()
        .put(book.update)
        .delete(book.delete);

    var lorem = require('./controllers/loremController');
    app.route('/lorems')
        .get(lorem.list_all_lorems);
};