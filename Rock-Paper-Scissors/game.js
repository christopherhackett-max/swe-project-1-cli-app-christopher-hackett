const gameData = {
    wins: 0,
    losses: 0,
    ties: 0,
    total: 0,
}



const game = (choice = "") => {
    if (!['rock', 'paper', 'scissors'].includes(choice.toLowerCase())) {
        console.log(`Invalid Choice, Please Choose "Rock", "Paper", or "Scissors"`);
        return;
    }
    const comp = Math.floor(Math.random() * 3)
}

const stats = () => {
    console.log(`Games Won: ${gameData.wins}`)
    console.log(`Games Lost: ${gameData.losses}`)
    console.log(`Games Tied: ${gameData.ties}`)
    console.log(`Total Games: ${gameData.total}`)
    if (gameData.total === 0) {
        console.log(`Win Rate: 0%`)
    } else {
        console.log(`Win Rate: ${Math.floor((gameData.wins / gameData.total) * 100)}%`)
    }
}


module.exports = { game, stats };