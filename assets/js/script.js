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

