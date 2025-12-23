const prompt = require('prompt-sync')({ sigint: true });
const { addItem, removeItem, viewList } = require('./list.js');

const showMenu = () => {
    let isRunning = true;

    while (isRunning) {
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
            addItem(name, quantity, price)
        } else if (menuChoice === '2') {
            console.clear();
            const name = prompt(`Enter item name to remove (type all to remove all): `)
            const quantity = prompt(`Enter quantity to remove: `)
            removeItem(name, quantity)
        } else if (menuChoice === '3') {
            console.clear()
            viewList()
        } else if (menuChoice === '4') {
            console.clear();
            isRunning = false;
        } else {
            console.log('Invalid option, try again.');
        }

        prompt('\nPress Enter to continue...');
        console.clear();
    }
}

module.exports = { showMenu };
