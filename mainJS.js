// Still need to code the winning comparison for player
// Remove the console.logs at the clickCounters
var clickCounter = 0;
var player1 = [];
var player2 = [];
var playersTurn = document.getElementById('player-chance')
var gameOver = document.getElementById('game-over')
var player_1 = document.getElementById('player-1')
var player_2 = document.getElementById('player-2')

var gameSpaces = document.querySelectorAll('.game-obj-placeable')
function mainGame() {
    // winnerOfTheGame();
    document.getElementById('game-grid').style.transition = "0.5s ease-in-out";
    document.getElementById('game-grid').style.display = "block";
    // Change this with By Adding a Class
    // document.getElementById('main-menu').style.transform="translateX(-19rem)";
    document.getElementById('main-menu').classList.add('moveLeft');

    document.getElementById('main-menu').style.transition = "0.5s";

    for (let index = 0; index < gameSpaces.length; index++) {
        const element = gameSpaces[index];
        element.addEventListener('click', () => {
            // Place Where X or O Will be shown
            var gameSpaceValueHolder = element.getElementsByTagName('p')[0];
            // Counts The Number of Click on the Grid
            // clickCounter++;
            // if count is more than zero and less than 9 as there are only 9 grids to stop overlapping

            // if wether the child is empty or not if not empty then don't perform the task
            if (gameSpaceValueHolder.childNodes.length === 0) {
                // Since the Players are allowed only 9 clicks

                if (clickCounter => 0 && clickCounter <= 8) {
                    // Player 1
                    if (clickCounter % 2 == 0) {
                        const innerHTMLContentX = element.getElementsByTagName('p')[0].innerHTML = "X"
                        playersTurn.innerHTML = "Player 2's Turn"
                        console.log("Player 1", clickCounter)
                        player1.push(element.getAttribute('id'))
                        setTimeout(() => {
                            winnerOfTheGameForX();
                        }, 600)
                        clickCounter++;
                        console.log("Player1")
                        console.log(player1)
                    }
                    // winnerOfTheGame();
                    // Player 2
                    else {
                        const innerHTMLContentO = element.getElementsByTagName('p')[0].innerHTML = "O";
                        playersTurn.innerHTML = "Player 1's Turn";
                        player2.push(element.getAttribute('id'));
                        clickCounter++; setTimeout(() => {
                            winnerOfTheGameForO();
                        }, 600)
                        console.log("Player2")
                        console.log(player2);
                    }
                    // winnerOfTheGame();
                }
                if (clickCounter === 9) {
                    gameOver.style.transition = "0.5 ease-in-out"
                    gameOver.style.display = "block";
                }
            }



        })

    }
}

document.getElementById('start').addEventListener('click', () => {
    mainGame();
    document.getElementById('start').disabled = true;
    document.getElementById('reset').removeAttribute("disabled")


})
document.getElementById('reset').addEventListener('click', () => {
    document.getElementById('game-grid').style.display = "block";
    // document.getElementById('start').setAttribute('disabled')

    for (let index = 0; index < gameSpaces.length; index++) {
        const element = gameSpaces[index];
        var gameSpaceValueHolder = element.getElementsByTagName('p')[0];
        gameSpaceValueHolder.innerHTML = "";
        clickCounter = 0;
    }
    playersTurn.innerHTML = "Player 1's Turn"
    player1 = [];
    player2 = [];
    // Making all player's Winning to go off
    player_1.style.display = "none";
    player_2.style.display = "none";

    // Making Game Over banner to go off
    gameOver.style.display = "none";
})

function gridDisplayNone() {
    setTimeout(() => {
        document.getElementById('game-grid').style.display = "none";

    }, 10)
}
function winnerOfTheGameForX() {
    const mustHaveContentToWin = document.getElementsByClassName('mustHaveContentForWin');
    // For Position 1


    if (mustHaveContentToWin[0].childNodes.length != 0 && mustHaveContentToWin[0].textContent === 'X') {
        if (player1.includes('2') && player1.includes('3')) {
            player_1.style.display = "block";
            // setInterval()
            gridDisplayNone();
        }
        else if (player1.includes('5') && player1.includes('9')) {
            player_1.style.display = "block";
            gridDisplayNone();

        }
        else if (player1.includes('4') && player1.includes('7')) {
            player_1.style.display = "block";
            gridDisplayNone();

        }
    }

    // For Position 2
    if (mustHaveContentToWin[1].childNodes.length != 0 && mustHaveContentToWin[1].textContent === 'X') {
        if (player1.includes('5') && player1.includes('8')) {
            player_1.style.display = "block";
            gridDisplayNone();
        }
    }
    // For Position 3
    if (mustHaveContentToWin[2].childNodes.length != 0 && mustHaveContentToWin[2].textContent === 'X') {
        if (player1.includes('5') && player1.includes('7')) {
            player_1.style.display = "block";
            gridDisplayNone();
        }
        else if (player1.includes('6') && player1.includes('9')) {
            player_1.style.display = "block";
            gridDisplayNone();
        }
    }
    // For Position 4
    if (mustHaveContentToWin[3].childNodes.length != 0 && mustHaveContentToWin[3].textContent === 'X') {
        if (player1.includes('5') && player1.includes('6')) {
            player_1.style.display = "block";
            gridDisplayNone();
        }
    }
    // For Position 7
    // console.log(mustHaveContentToWin[6].getAttribute('id'))
    if (mustHaveContentToWin[4].childNodes.length != 0 && mustHaveContentToWin[4].textContent === 'X') {
        if (player1.includes('8') && player1.includes('9')) {
            player_1.style.display = "block";
            gridDisplayNone();
        }
    }

}
function winnerOfTheGameForO() {
    const mustHaveContentToWin = document.getElementsByClassName('mustHaveContentForWin');
    // For Position 1
    if (mustHaveContentToWin[0].childNodes.length != 0 && mustHaveContentToWin[0].textContent === 'O') {
        if (player2.includes('2') && player2.includes('3')) {
            player_2.style.display = "block";
            gridDisplayNone();
        }
        else if (player2.includes('5') && player2.includes('9')) {
            player_2.style.display = "block";
            gridDisplayNone();

        }
        else if (player2.includes('4') && player2.includes('7')) {
            player_2.style.display = "block";
            gridDisplayNone();

        }
    }

    // For Position 2
    if (mustHaveContentToWin[1].childNodes.length != 0 && mustHaveContentToWin[1].textContent === 'O') {
        if (player2.includes('5') && player2.includes('8')) {
            player_2.style.display = "block";
            gridDisplayNone();
        }
    }
    // For Position 3
    if (mustHaveContentToWin[2].childNodes.length != 0 && mustHaveContentToWin[2].textContent === 'O') {
        if (player2.includes('5') && player2.includes('7')) {
            player_2.style.display = "block";
            gridDisplayNone();
        }
        else if (player2.includes('6') && player2.includes('9')) {
            player_2.style.display = "block";
            gridDisplayNone();
        }
    }
    // For Position 4
    if (mustHaveContentToWin[3].childNodes.length != 0 && mustHaveContentToWin[3].textContent === 'O') {
        if (player2.includes('5') && player2.includes('6')) {
            player_2.style.display = "block";
            gridDisplayNone();
        }
    }
    // For Position 7
    // console.log(mustHaveContentToWin[6].getAttribute('id'))
    if (mustHaveContentToWin[4].childNodes.length != 0 && mustHaveContentToWin[4].textContent === 'O') {
        if (player2.includes('8') && player2.includes('9')) {
            player_2.style.display = "block";
            gridDisplayNone();
        }
    }

}

