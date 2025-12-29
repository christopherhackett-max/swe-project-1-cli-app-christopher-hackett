const prompt = require('prompt-sync')({ sigint: true });

class Manager {
    #list = []
    constructor() {

    }
    addItem(name, quantity, price) {
        if (!name || !quantity || !price || name.trim() === '') {
            console.log('Invalid input, try again.');
            return;
        }

        if (!Number.isInteger(Number(quantity)) || Number(quantity) <= 0 || isNaN(Number(price)) || Number(price) <= 0 || !/^[a-zA-Z\s]+$/.test(name.trim())) {
            console.log('Invalid input, try again.');
            return;

        }
        const obj = {
            name: name.trim().toLowerCase(),
            quantity: parseInt(quantity),
            price: Number(price)
        }

        for (const item of this.#list) {
            if (item.name === name.trim().toLowerCase()) {
                console.log('This item already exists in your cart.');
                const choice = prompt(`Would you like to add to existing item? (y/n): `);
                if (choice !== 'y' && choice !== 'n') {
                    console.log('Invalid input, try again.')
                } else if (choice === 'n') {
                    return;
                } else {
                    console.log('Added to existing item.');
                    item.quantity += parseInt(quantity);
                    return;
                }
            }
        }
        this.#list.push(obj)
    }

    removeItem(name, quantity) {
        if (!name || name.trim() === '') {
            console.log('Invalid input, try again.');
            return;
        }

        if (name.toLowerCase() === 'all') {
            console.log('Emptied your list.')
            this.#list.length = 0
            return;
        }

        if (this.#list.find(item => item.name === name.toLowerCase()) === undefined) {
            console.log('Item not found.')
            return;
        }

        if (!quantity || !Number.isInteger(Number(quantity)) || Number(quantity) <= 0) {
            console.log('Invalid quantity.');
            return;
        }

        for (const item of this.#list) {
            if (name.toLowerCase() === item.name) {
                item.quantity -= parseInt(quantity)
            }
            if (item.quantity <= 0) {
                this.#list.splice(this.#list.indexOf(item), 1)
            }
            return;
        }
    }

    viewList() {
        if (this.#list.length === 0) {
            console.log(`You have nothing on your list!`)
            return
        }
        console.log(`Your Shopping List:`)
        for (const item of this.#list) {
            console.log(`- ${item.quantity} ${item.name}: $${item.price}`)
        }
        let totalItems = 0;
        let totalPrice = 0;
        for (const item of this.#list) {
            totalPrice += item.price * item.quantity
            totalItems += item.quantity
        }
        console.log(`- Total Items: ${totalItems}`)
        console.log(`- Total Price: $${totalPrice.toFixed(2)}`)
    }
}

module.exports = Manager;