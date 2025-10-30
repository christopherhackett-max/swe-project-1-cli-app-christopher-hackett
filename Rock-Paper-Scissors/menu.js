const prompt = require('prompt-sync')({ sigint: true });
const { game, stats, } = require('./game.js');

const showMenu = () => {
    let isRunning = true;

    while (isRunning) {
        console.log('Menu:');
        console.log('1. Play Round');
        console.log('2. View Stats');
        console.log('3. Exit\n');

        const menuChoice = prompt('Choose an Action (Enter 1-3): ').trim();
        if (menuChoice === '1') {
            console.clear();
            const choice = prompt(`Choose a move (rock, paper, or scissors): `);
            game(choice);
        } else if (menuChoice === '2') {
            console.clear();
            console.log(`Current Stats:`);
            stats();
        } else if (menuChoice === '3') {
            console.clear();
            console.log(`Final Stats:`);
            stats();
            isRunning = false;
        } else {
            console.log('Invalid option, try again.');
        }

        prompt('\nPress Enter to continue...');
        console.clear();
    }
}

module.exports = { showMenu };
