const prompt = require('prompt-sync')({ sigint: true });

const Game = require('./game')

class App {
    constructor() {
        this.isRunning = true
    }

    start() {
        console.clear()
        console.log('Welcome To The Quiz Game!')
        this.game = new Game()

        while (this.isRunning) {
            this.showMenu()
        }

        console.log("Come Play Again Some Time!")
    }

    showMenu() {
        console.log('Menu:');
        console.log('1. Start Quiz');
        console.log('2. View High Scores');
        console.log('3. Exit\n');

        const menuChoice = prompt('Choose an Action (Enter 1-3): ').trim();
        if (menuChoice === '1') {
            console.clear();
            this.game.play();
        } else if (menuChoice === '2') {
            console.clear();
            this.game.viewScores();
        } else if (menuChoice === '3') {
            console.clear();
            this.isRunning = false;
        } else {
            console.log('Invalid option, try again.');
        }

        prompt('\nPress Enter to continue...');
        console.clear();
    }
}


module.exports = App;
