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

