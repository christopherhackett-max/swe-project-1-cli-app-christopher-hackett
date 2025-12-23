const { showMenu } = require('./menu.js');

const startApp = () => {
    console.clear();
    console.log("Welcome To Your Shopping List Manager!\n");
    showMenu();
    console.log("Goodbye!");
}

startApp();