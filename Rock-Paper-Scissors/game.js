const gameData = {
    wins: 0,
    losses: 0,
    ties: 0,
    total: 0,
}


const moves = ['rock', 'paper', 'scissors']
const game = (choice = "") => {
    if (!moves.includes(choice.toLowerCase())) {
        console.log(`Invalid Choice, Please Choose "Rock", "Paper", or "Scissors"`);
        return;
    }

    const comp = Math.floor(Math.random() * 3)
    if (choice === 'rock') {
        if (moves[comp] === 'rock') {
            console.log(`You chose: rock\n Computer chose: rock\n It's a tie!`)
            gameData.ties++
            gameData.total++
        } else if (moves[comp] === 'paper') {
            console.log(`You chose: rock\n Computer chose: paper\n Paper beats rock! You lose!`)
            gameData.losses++
            gameData.total++
        } else if (moves[comp] === 'scissors') {
            console.log(`You chose: rock\n Computer chose: scissors\n Rock beats scissors! You win!`)
            gameData.wins++
            gameData.total++
        }
    } else if (choice === 'paper') {
        if (moves[comp] === 'rock') {
            console.log(`You chose: paper\n Computer chose: rock\n Paper beats rock! You win`)
            gameData.wins++
            gameData.total++
        } else if (moves[comp] === 'paper') {
            console.log(`You chose: paper\n Computer chose: paper\n It's a tie!`)
            gameData.ties++
            gameData.total++
        } else if (moves[comp] === 'scissors') {
            console.log(`You chose: paper\n Computer chose: scissors\n Scissors beats paper! You lose!`)
            gameData.losses++
            gameData.total++
        }
    } else {
        if (moves[comp] === 'rock') {
            console.log(`You chose: scissors\n Computer chose: rock\n Rock beats scissors! You lose!`)
            gameData.loses++
            gameData.total++
        } else if (moves[comp] === 'paper') {
            console.log(`You chose: scissors\n Computer chose: paper\n Scissors beats paper! You win!`)
            gameData.wins++
            gameData.total++
        } else if (moves[comp] === 'scissors') {
            console.log(`You chose: scissors\n Computer chose: scissors\n It's a tie!`)
            gameData.ties++
            gameData.total++
        }
    }
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