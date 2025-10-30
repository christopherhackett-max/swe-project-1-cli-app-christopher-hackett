const { showMenu } = require('./menu.js');

const startApp = () => {
    console.clear();
    console.log("Welcome to Rock Paper Scissors\n");
    showMenu();
    console.log("Come Back Soon!");
}

startApp();