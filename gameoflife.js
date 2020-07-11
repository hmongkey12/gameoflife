const rows = 50;
const columns = 50;
let deadHue = Math.floor(Math.random() * 361);
let complimentHue = deadHue + 180;
let liveColor = `hsl(${complimentHue}, 50%, 50%)`;
let deadColor = `hsl(${deadHue}, 50%, 50%)`;

const gameBoard = Array(rows)
  .fill([])
  .map((i) => {
    return Array(columns).fill(deadColor);
  });

for (let i = 0; i < rows; i++) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  for (let j = 0; j < columns; j++) {
    const inner = document.createElement("div");
    inner.id = `${i},${j}`;
    inner.onclick = () => {
      if (gameBoard[i][j] === deadColor) {
        inner.style.background = liveColor;
        gameBoard[i][j] = liveColor;
      } else {
        inner.style.background = deadColor;
        gameBoard[i][j] = deadColor;
      }
    };
    inner.classList.add("square");
    wrapper.appendChild(inner);
  }
  document.body.appendChild(wrapper);
}

const test = document.getElementsByTagName("div");
document.getElementById("startButton").addEventListener("click", () => {
  if (!sessionStorage.getItem("intervalID")) {
    const intervalID = window.setInterval(simulate, 100);
    sessionStorage.setItem("intervalID", JSON.stringify(intervalID));
  }
});
document.getElementById("randomButton").addEventListener("click", () => {
  deadHue = Math.floor(Math.random() * 361);
  complimentHue = deadHue + 180;
  liveColor = `hsl(${complimentHue}, 50%, 50%)`;
  deadColor = `hsl(${deadHue}, 50%, 50%)`;
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[0].length; j++) {
      if (Math.random() < 0.1) {
        gameBoard[i][j] = liveColor;
        test.namedItem(`${i},${j}`).style.background = liveColor;
      } else {
        gameBoard[i][j] = deadColor;
        test.namedItem(`${i},${j}`).style.background = deadColor;
      }
    }
  }
});
document.getElementById("clearButton").addEventListener("click", () => {
  const intervalID = JSON.parse(sessionStorage.getItem("intervalID"));
  if (intervalID) {
    window.clearInterval(intervalID);
    sessionStorage.removeItem("intervalID");
  }
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[0].length; j++) {
      gameBoard[i][j] = deadColor;
      test.namedItem(`${i},${j}`).style.background = deadColor;
    }
  }
});

function updateGameboard(nextGen) {
  for (let k = 0; k < gameBoard.length; k++) {
    for (let l = 0; l < gameBoard[0].length; l++) {
      if (nextGen[k][l] !== "") {
        gameBoard[k][l] = nextGen[k][l];
      }
    }
  }
}

function simulate() {
  let nextGen = Array(rows)
    .fill([])
    .map((i) => {
      return Array(columns).fill("");
    });
  for (let k = 0; k < gameBoard.length; k++) {
    for (let l = 0; l < gameBoard[0].length; l++) {
      let neighbors = 0;
      if (gameBoard[k][l] === deadColor) {
        if (
          gameBoard[k - 1] !== undefined &&
          gameBoard[k - 1][l] !== undefined &&
          gameBoard[k - 1][l] === liveColor
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k - 1] !== undefined &&
          gameBoard[k - 1][l - 1] !== undefined &&
          gameBoard[k - 1][l - 1] === liveColor
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k - 1] !== undefined &&
          gameBoard[k - 1][l + 1] !== undefined &&
          gameBoard[k - 1][l + 1] === liveColor
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k] !== undefined &&
          gameBoard[k][l - 1] !== undefined &&
          gameBoard[k][l - 1] === liveColor
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k] !== undefined &&
          gameBoard[k][l + 1] !== undefined &&
          gameBoard[k][l + 1] === liveColor
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k + 1] !== undefined &&
          gameBoard[k + 1][l] !== undefined &&
          gameBoard[k + 1][l] === liveColor
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k + 1] !== undefined &&
          gameBoard[k + 1][l - 1] !== undefined &&
          gameBoard[k + 1][l - 1] === liveColor
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k + 1] !== undefined &&
          gameBoard[k + 1][l + 1] !== undefined &&
          gameBoard[k + 1][l + 1] === liveColor
        ) {
          neighbors += 1;
        }
        if (neighbors === 3) {
          nextGen[k][l] = liveColor;
        }
      } else if (gameBoard[k - 1] !== undefined) {
        if (
          gameBoard[k - 1][l] !== undefined &&
          gameBoard[k - 1][l] === liveColor
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k - 1] !== undefined &&
          gameBoard[k - 1][l - 1] !== undefined &&
          gameBoard[k - 1][l - 1] === liveColor
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k - 1] !== undefined &&
          gameBoard[k - 1][l + 1] !== undefined &&
          gameBoard[k - 1][l + 1] === liveColor
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k] !== undefined &&
          gameBoard[k][l - 1] !== undefined &&
          gameBoard[k][l - 1] === liveColor
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k] !== undefined &&
          gameBoard[k][l + 1] !== undefined &&
          gameBoard[k][l + 1] === liveColor
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k + 1] !== undefined &&
          gameBoard[k + 1][l] !== undefined &&
          gameBoard[k + 1][l] === liveColor
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k + 1] !== undefined &&
          gameBoard[k + 1][l - 1] !== undefined &&
          gameBoard[k + 1][l - 1] === liveColor
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k + 1] !== undefined &&
          gameBoard[k + 1][l + 1] !== undefined &&
          gameBoard[k + 1][l + 1] === liveColor
        ) {
          neighbors += 1;
        }
        if (neighbors <= 1 || neighbors >= 4) {
          nextGen[k][l] = deadColor;
        }
      }
    }
  }

  updateGameboard(nextGen);

  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[0].length; j++) {
      if (gameBoard[i][j] === liveColor) {
        test.namedItem(`${i},${j}`).style.background = liveColor;
      } else {
        test.namedItem(`${i},${j}`).style.background = deadColor;
      }
    }
  }
}
