class Game {
    #moves = ['rock', 'paper', 'scissors']
    #beats = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }
    #wins = 0
    #losses = 0
    #ties = 0
    constructor() {

    }
    play(choice = '') {
        const comp = Math.floor(Math.random() * 3);
        const computerChoice = this.#moves[comp];
        const normalizedChoice = choice.trim().toLowerCase();

        if (!this.#beats.hasOwnProperty(normalizedChoice)) {
            console.log(`Invalid choice! Please choose rock, paper, or scissors.`);
            return;
        }

        console.log(`You chose: ${normalizedChoice}\nComputer chose: ${computerChoice}`);

        if (normalizedChoice === computerChoice) {
            console.log("It's a tie!");
            this.#ties++;
        } else if (this.#beats[normalizedChoice] === computerChoice) {
            console.log(`${normalizedChoice.charAt(0).toUpperCase() + normalizedChoice.slice(1)} beats ${computerChoice}! You win!`);
            this.#wins++;
        } else {
            console.log(`${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${normalizedChoice}! You lose!`);
            this.#losses++;
        }
    }
    viewStats() {
        const total = this.#wins + this.#losses + this.#ties
        console.log(`Games Won: ${this.#wins}`)
        console.log(`Games Lost: ${this.#losses}`)
        console.log(`Games Tied: ${this.#ties}`)
        console.log(`Total Games: ${total}`)
        if (total === 0) {
            console.log(`Win Rate: 0%`)
        } else {
            console.log(`Win Rate: ${Math.floor((this.#wins / total) * 100)}%`)
        }
    }
}

module.exports = Game;