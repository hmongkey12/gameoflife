const rows = 50;
const columns = 50;
const gameBoard = Array(rows)
  .fill([])
  .map((i) => {
    return Array(columns).fill("khaki");
  });

for (let i = 0; i < rows; i++) {
  const wrapper = document.createElement("div");
  wrapper.setAttribute(
    "style",
    "background-color: lightsalmon; border: 1px solid black; width: 100%; position: relative; display: flex;"
  );
  for (let j = 0; j < columns; j++) {
    const inner = document.createElement("div");
    inner.id = `${i},${j}`;
    inner.onclick = () => {
      if (inner.style.background === "khaki") {
        inner.style.background = "lightsalmon";
        gameBoard[i][j] = "lightsalmon";
      } else {
        inner.style.background = "khaki";
        gameBoard[i][j] = "khaki";
      }
    };
    inner.setAttribute(
      "style",
      "background-color: khaki; width: 100%; height: 5vh; position: relative; border: 1px solid black;"
    );
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
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[0].length; j++) {
      if (Math.random() < 0.1) {
        gameBoard[i][j] = "lightsalmon";
        test.namedItem(`${i},${j}`).style.background = "lightsalmon";
      } else {
        gameBoard[i][j] = "khaki";
        test.namedItem(`${i},${j}`).style.background = "khaki";
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
      gameBoard[i][j] = "khaki";
      test.namedItem(`${i},${j}`).style.background = "khaki";
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
      if (gameBoard[k][l] === "khaki") {
        if (
          gameBoard[k - 1] !== undefined &&
          gameBoard[k - 1][l] !== undefined &&
          gameBoard[k - 1][l] === "lightsalmon"
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k - 1] !== undefined &&
          gameBoard[k - 1][l - 1] !== undefined &&
          gameBoard[k - 1][l - 1] === "lightsalmon"
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k - 1] !== undefined &&
          gameBoard[k - 1][l + 1] !== undefined &&
          gameBoard[k - 1][l + 1] === "lightsalmon"
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k] !== undefined &&
          gameBoard[k][l - 1] !== undefined &&
          gameBoard[k][l - 1] === "lightsalmon"
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k] !== undefined &&
          gameBoard[k][l + 1] !== undefined &&
          gameBoard[k][l + 1] === "lightsalmon"
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k + 1] !== undefined &&
          gameBoard[k + 1][l] !== undefined &&
          gameBoard[k + 1][l] === "lightsalmon"
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k + 1] !== undefined &&
          gameBoard[k + 1][l - 1] !== undefined &&
          gameBoard[k + 1][l - 1] === "lightsalmon"
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k + 1] !== undefined &&
          gameBoard[k + 1][l + 1] !== undefined &&
          gameBoard[k + 1][l + 1] === "lightsalmon"
        ) {
          neighbors += 1;
        }
        if (neighbors === 3) {
          nextGen[k][l] = "lightsalmon";
        }
      } else if (
        gameBoard[k - 1] !== undefined &&
        gameBoard[k][l] === "lightsalmon"
      ) {
        if (
          gameBoard[k - 1][l] !== undefined &&
          gameBoard[k - 1][l] === "lightsalmon"
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k - 1] !== undefined &&
          gameBoard[k - 1][l - 1] !== undefined &&
          gameBoard[k - 1][l - 1] === "lightsalmon"
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k - 1] !== undefined &&
          gameBoard[k - 1][l + 1] !== undefined &&
          gameBoard[k - 1][l + 1] === "lightsalmon"
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k] !== undefined &&
          gameBoard[k][l - 1] !== undefined &&
          gameBoard[k][l - 1] === "lightsalmon"
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k] !== undefined &&
          gameBoard[k][l + 1] !== undefined &&
          gameBoard[k][l + 1] === "lightsalmon"
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k + 1] !== undefined &&
          gameBoard[k + 1][l] !== undefined &&
          gameBoard[k + 1][l] === "lightsalmon"
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k + 1] !== undefined &&
          gameBoard[k + 1][l - 1] !== undefined &&
          gameBoard[k + 1][l - 1] === "lightsalmon"
        ) {
          neighbors += 1;
        }
        if (
          gameBoard[k + 1] !== undefined &&
          gameBoard[k + 1][l + 1] !== undefined &&
          gameBoard[k + 1][l + 1] === "lightsalmon"
        ) {
          neighbors += 1;
        }
        if (neighbors <= 1 || neighbors >= 4) {
          nextGen[k][l] = "khaki";
        }
      }
    }
  }

  updateGameboard(nextGen);

  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[0].length; j++) {
      if (gameBoard[i][j] === "lightsalmon") {
        test.namedItem(`${i},${j}`).style.background = "lightsalmon";
      } else {
        test.namedItem(`${i},${j}`).style.background = "khaki";
      }
    }
  }
}
