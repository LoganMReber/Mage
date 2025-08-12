import { useState, useEffect } from "react";

const RuneSearchGame = () => {
  const answerSize = 4;
  const gridSize = 10; // Size of each side of a grid so 10 = 10x10 grid.

  const [answer, setAnswer] = useState([]);
  const [startPos, setStartPos] = useState([0, 0]);
  const [endPos, setEndPos] = useState([0, 0]);
  const [grid, setGrid] = useState([]);
  const [playerChoice1, setPlayerchoice1] = useState([0, 0]);
  const [playerChoice2, setPlayerchoice2] = useState([0, 0]);
  const [startSelected, setStartSelected] = useState(false);
  const [training, settraining] = useState(true);
  const [score, setScore] = useState(0);
  const [numtries, setNumTries] = useState(1);

  const areArraysEqual = (arr1 = [], arr2 = []) => {
    let isEqual = true;
    if (arr1.length == arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
          isEqual = false;
          break;
        }
      }
    }

    return isEqual;
  }

  const AnswerSelected = input => {
    console.log("clicked");
    if (!startSelected) {
      setPlayerchoice1(input);
      setStartSelected(true);
    }
    else {
      setPlayerchoice2(input);
    }
  }

  // Check if user gets correct answer
   useEffect(() => {
    console.log("First", playerChoice1);
    console.log("Second", playerChoice2);

    if (playerChoice1.length > 0 && playerChoice2.length > 0) {
      if (areArraysEqual(playerChoice1, startPos) && areArraysEqual(playerChoice2, endPos)) {
        console.log("Win");
        if (!training) {
          setScore(1);
        }
        else {
          setScore((gridSize * gridSize * (1 / answerSize)) / numtries);
        }
      }
      else {
        console.log("loss");
        if (!training) {
          setScore(0);
        }
        else {
          setNumTries(numtries + 1);
          setStartSelected(false);
        }
      }
    }
   }, [playerChoice2])

  

  useEffect(() => {
    const getRandomLeter = () => {
      const minNum = 65; // A
      const maxNum = 90; // Z
      const randomNum = Math.floor(Math.random() * (maxNum - minNum) + minNum); // get random number in range of minNum - maxNum
      return String.fromCharCode(randomNum);
    };

    // Setting up 2D array of random letters
    const tempGrid = [];
    for (let i = 0; i < gridSize; i++) {
      tempGrid[i] = [];
      for (let j = 0; j < gridSize; j++) {
        tempGrid[i][j] = getRandomLeter();
      }
    }

    setGrid(tempGrid);

    const safeRoll = (offset = 1, inverseOffset = false) => {
      let roll = Math.floor(Math.random() * (gridSize - offset));
      if (inverseOffset) {
        roll += offset - 1;
      }
      return roll;
    };

    let x, y;
    const answerDir = Math.floor(Math.random() * 4);

    let tempAns = [];
    switch (answerDir) {
      case 0: // Down
        x = safeRoll();
        y = safeRoll(answerSize, false);
        setStartPos([x, y]);
        setEndPos([x, y + answerSize - 1]);

        for (let i = 0; i < answerSize; i++) {
          console.log(x, y + i);
          tempAns.push([y + i, x]);
        }

        break;

      case 1: // Up
        x = safeRoll();
        y = safeRoll(answerSize, true);
        setStartPos([x, y]);
        setEndPos([x, y - answerSize + 1]);

        for (let i = 0; i < answerSize; i++) {
          console.log(x, y - i);
          tempAns.push([y - i, x]);
        }

        break;

      case 2: // Left
        x = safeRoll(answerSize, true);
        y = safeRoll();
        setStartPos([x, y]);
        setEndPos([x - answerSize + 1, y]);

        for (let i = 0; i < answerSize; i++) {
          console.log(x - i, y);
          tempAns.push([y, x - i]);
        }

        break;

      case 3: // Right
        x = safeRoll(answerSize, false);
        y = safeRoll();
        setStartPos([x, y]);
        setEndPos([x + answerSize - 1, y]);

        for (let i = 0; i < answerSize; i++) {
          console.log(x + i, y);
          tempAns.push([y, x + i]);
        }

        break;

      default:
        console.log("def");
        break;
    }

    console.log("tempAns", tempAns);

    let temp = [];
    for (let i = 0; i < answerSize; i++) {
      temp.push(tempGrid[tempAns[i][0]][tempAns[i][1]]);
    }

    console.log("temp", temp);
    setAnswer(temp);
  }, []);

  return (
    <div className="RuneSearch">
      <h1>Rune Search Screen</h1>
      {answer.length > 0 ? <h2>Find This: {answer}</h2> : <div>loading</div>}
      {grid.length > 0 ? (
        <h3>
          Start: {startPos[0] + 1}, {startPos[1] + 1} |{" "}
          {grid[startPos[1]][startPos[0]]}
        </h3>
      ) : (
        <div>loading Start</div>
      )}

      {grid.length > 0 ? (
        <h3>
          End: {endPos[0] + 1}, {endPos[1] + 1} | {grid[endPos[1]][endPos[0]]}
        </h3>
      ) : (
        <div>loading End</div>
      )}
      <table>
        <tbody>
          {grid.length > 0 ? (
            grid.map((row, i) => {
              return (
                <tr key={i}>
                  {row.map((element, j) => {
                    return (
                      <td key={j}>
                        {" "}
                        <button onClick={()=>AnswerSelected([j, i])}>{element}</button>{" "}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <tr><td>Loading</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RuneSearchGame;
