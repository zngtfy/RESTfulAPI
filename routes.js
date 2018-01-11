'use strict';

module.exports = function (app) {
    // Task ***************************
    var task = require('./controllers/taskController');
    app.route('/tasks')
        .get(task.list)
        .post(task.create);

    app.route('/tasks/:id')
        .get(task.read)
        .put(task.update)
        .delete(task.delete);

    // Book ***************************
    var book = require('./controllers/bookController');
    app.route('/books')
        .get(book.list)
        .post(book.create);

    app.route('/books/:id')
        .get(book.read)
        .put(book.update)
        .delete(book.delete);

    // Lorem ***************************
    var lorem = require('./controllers/loremController');
    app.route('/lorems')
        .get(lorem.list);

    // Product ***************************
    var product = require('./controllers/productController');
    app.route('/products')
        .get(product.list)
        .post(product.create);

    app.route('/tasks/:id')
        .get(product.read)
        .put(product.update)
        .delete(product.delete);
};