// Javascript File
/* Reference: https://www.webtips.dev/memory-game-in-javascript */
/* Define Selectors */
const selectors = {
    boardContainer: document.querySelector('.board-container'),
    board: document.querySelector('.board'),
    moves: document.querySelector('.moves'),
    timer: document.querySelector('.timer'),
    start: document.querySelector('button'),
    win: document.querySelector('.win')
};

/* Reference: https://www.webtips.dev/memory-game-in-javascript */
/* Game State */
const state = {
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
    loop: null
};

/* Reference: https://www.webtips.dev/memory-game-in-javascript */
/* Shuffle Array */
const shuffle = array => {
    const clonedArray = [...array];

    for (let index = clonedArray.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        const original = clonedArray[index];

        clonedArray[index] = clonedArray[randomIndex];
        clonedArray[randomIndex] = original;
    }

    return clonedArray;
};

/* Reference: https://www.webtips.dev/memory-game-in-javascript */
/* Pick Random Array function */
const pickRandom = (array, items) => {
    const clonedArray = [...array];
    const randomPicks = [];

    for (let index = 0; index < items; index++) {
        const randomIndex = Math.floor(Math.random() * clonedArray.length);

        randomPicks.push(clonedArray[randomIndex]);
        clonedArray.splice(randomIndex, 1);
    }

    return randomPicks;
};

/* Reference: https://www.webtips.dev/memory-game-in-javascript */
/* generategame board */
const generateGame = () => {
    const dimensions = selectors.board.getAttribute('data-dimension');

    if (dimensions % 2 !== 0) {
        throw new Error("The dimension of the board must be an even number.");
    }

    const emojis = ['&#127815', '&#127820', '&#127827', '&#127823', '&#127821', '&#127818', '&#129381', '&#127813', '&#129389', '&#127826'];
    const picks = pickRandom(emojis, (dimensions * dimensions) / 2);
    const items = shuffle([...picks, ...picks]);
    const cards = `
        <div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
            ${items.map(item => `
                <div class="card">
                    <div class="card-front"></div>
                    <div class="card-back">${item}</div>
                </div>
            `).join('')}
       </div>
    `;

    const parser = new DOMParser().parseFromString(cards, 'text/html');

    selectors.board.replaceWith(parser.querySelector('.board'));
};

/* Reference: https://www.webtips.dev/memory-game-in-javascript */
/* startgame function */
const startGame = () => {
    state.gameStarted = true;
    selectors.start.classList.add('disabled');

    state.loop = setInterval(() => {
        state.totalTime++;

        selectors.moves.innerText = `${state.totalFlips} moves`;
        selectors.timer.innerText = `time: ${state.totalTime} sec`;
    }, 1000);
};

/* Reference: https://www.webtips.dev/memory-game-in-javascript */
/* flipbackcards function */
const flipBackCards = () => {
    document.querySelectorAll('.card:not(.matched)').forEach(card => {
        card.classList.remove('flipped');
    });

    state.flippedCards = 0;
};

/* Reference: https://www.webtips.dev/memory-game-in-javascript */
/* flipcard function */
const flipCard = card => {
    state.flippedCards++;
    state.totalFlips++;

    if (!state.gameStarted) {
        startGame();
    }

    if (state.flippedCards <= 2) {
        card.classList.add('flipped');
    }

    if (state.flippedCards === 2) {
        const flippedCards = document.querySelectorAll('.flipped:not(.matched)');

        if (flippedCards[0].innerText === flippedCards[1].innerText) {
            flippedCards[0].classList.add('matched');
            flippedCards[1].classList.add('matched');
        }

        setTimeout(() => {
            flipBackCards();
        }, 1000);
    }

    // If there are no more cards that we can flip, we won the game
    if (!document.querySelectorAll('.card:not(.flipped)').length) {
        setTimeout(() => {
            selectors.boardContainer.classList.add('flipped');
            selectors.win.innerHTML = `
                <span class="win-text">
                    You won!<br />
                    in <span class="highlight">${state.totalFlips}</span> moves.<br />
                    with a time of <span class="highlight">${state.totalTime}</span> seconds.
				</span>
            `;

            clearInterval(state.loop);
        }, 1000);
    }
};

/* Reference: https://www.webtips.dev/memory-game-in-javascript */
/* event listeners function */
const attachEventListeners = () => {
    document.addEventListener('click', event => {
        const eventTarget = event.target;
        const eventParent = eventTarget.parentElement;


        if (eventTarget.className.includes('card') && !eventParent.className.includes('flipped')) {
            flipCard(eventParent);
        } else if (eventTarget.nodeName === 'BUTTON' && !eventTarget.className.includes('disabled')) {
            startGame();
        }
    });
};

/* Reference: https://www.webtips.dev/memory-game-in-javascript */
generateGame();
attachEventListeners();