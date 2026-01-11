const prompt = require('prompt-sync')({ sigint: true });

const Manager = require('./list.js');

class App {
    constructor() {
        this.isRunning = true
    }

    start() {
        console.clear()
        console.log('Welcome To Your Shopping List Manager!')
        this.manager = new Manager()

        while (this.isRunning) {
            this.showMenu()
        }

        console.log("Goodbye!")
    }

    showMenu() {
        console.log('Menu:');
        console.log('1. Add Item');
        console.log('2. Remove item');
        console.log('3. View List');
        console.log(`4. Exit\n`)

        const menuChoice = prompt('Choose an Action (Enter 1-4): ').trim();
        if (menuChoice === '1') {
            console.clear();
            const name = prompt(`Enter item name: `)
            const quantity = prompt(`Enter quantity: `)
            const price = prompt(`Enter price per item: `)
            this.manager.addItem(name, quantity, price)
        } else if (menuChoice === '2') {
            console.clear();
            const name = prompt(`Enter item name to remove (type all to remove all): `)
            const quantity = prompt(`Enter quantity to remove: `)
            this.manager.removeItem(name, quantity)
        } else if (menuChoice === '3') {
            console.clear()
            this.manager.viewList()
        } else if (menuChoice === '4') {
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
