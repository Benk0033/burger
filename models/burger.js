// Import the ORM to create functions that will interact with the database.
var orm = require('../config/orm.js');

var burger = {
    selectAllBurgers: function (cb) {
        // select all from burgers table
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertBurger: function (cols, vals, cb) {
        // insert into burgers table
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    updateBurger: function (objColVals, condition, cb) {
        // update existing data in burgers table
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};


// Export the database functions for the controller (burger.js).
module.exports = burger;