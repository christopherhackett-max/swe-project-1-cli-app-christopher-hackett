const prompt = require('prompt-sync')({ sigint: true });

const Game = require('./game')

class App {
    constructor() {
        this.isRunning = true
    }

    start() {
        console.clear()
        console.log('Welcome to Rock Paper Scissors!')
        this.game = new Game()

        while (this.isRunning) {
            this.showMenu()
        }

        console.log("Come Play Again Some Time!")
    }

    showMenu() {
        console.log('Menu:');
        console.log('1. Play Round');
        console.log('2. View Stats');
        console.log('3. Exit\n');

        const menuChoice = prompt('Choose an Action (Enter 1-3): ').trim();
        if (menuChoice === '1') {
            console.clear();
            const choice = prompt(`Choose a move (rock, paper, or scissors) (type in your move): `);
            this.game.play(choice);
        } else if (menuChoice === '2') {
            console.clear();
            console.log(`Current Stats:`);
            this.game.viewStats()
        } else if (menuChoice === '3') {
            console.clear();
            console.log(`Final Stats:`);
            this.game.viewStats()
            this.isRunning = false;
        } else {
            console.log('Invalid option, try again.');
        }

        prompt('\nPress Enter to continue...');
        console.clear();
    }
}


module.exports = App;
