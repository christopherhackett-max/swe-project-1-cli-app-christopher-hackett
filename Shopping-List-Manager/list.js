const shoppingList = []

const addItem = (name, quantity, price) => {
    const obj = {
        name,
        quantity: Number(quantity),
        price: Number(price)
    }
    console.log(`Added ${quantity} ${name} at $${price} each to your shopping list!`)
    for (item of shoppingList) {
        if (item.name === name && item.price === price) {
            item.quantity += Number(quantity)
            return
        }
    }
    shoppingList.push(obj)
}

const removeItem = (name, quantity) => {
    console.log(`Removed ${quantity} ${name} from your shopping list!`)
    for (item of shoppingList) {
        if (item.name === name) {
            item.quantity -= quantity
        }
        if (item.quantity <= 0) {
            shoppingList.splice(item, 1)
        }
    }
}

const viewList = () => {
    if (shoppingList.length === 0) {
        console.log(`You have nothing on your list!`)
        return
    }
    console.log(`Your Shopping List:`)
    for (item of shoppingList) {
        console.log(`- ${item.quantity} ${item.name}: $${item.price}\n`)
    }
    const totalItems = shoppingList.length
    let totalPrice = 0;
    for (item of shoppingList) {
        totalPrice += item.price
    }
    console.log(`Total Items: ${totalItems}`)
    console.log(`Total Price: $${totalPrice}`)
}

module.exports = { addItem, removeItem, viewList };