import { WINNER_COMBOS } from "../constants"
import confetti from "canvas-confetti";

const getWinner = (boardToCheck) => {
  for(let combo of WINNER_COMBOS) {
    let [a, b, c] = combo
    if (
      boardToCheck[a] && 
      boardToCheck[a] == boardToCheck[b] &&
      boardToCheck[a] == boardToCheck[c]
    ) return boardToCheck[a]
  }

  return null
}

const checkEndGame = (boardToCheck) => {
  return boardToCheck.every((square) => square != null)
}

export const checkWinner = (board, setWinner) => {
  let newWinner = getWinner(board)
  if (newWinner) {
    confetti()
    setWinner(newWinner)
  } else if (checkEndGame(board)) {
    setWinner(false)
  } 
}