import { useState, useEffect } from 'react'
import { TURNS } from './constants'
import { checkWinner } from './logic/board'
import { Square } from './components/Square'
import { WinnerModal } from './components/WinnerModal'
import { Board } from './components/Board'
import { saveGameToStorage, resetGameStorage } from './logic/storage'

function App () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    checkWinner(board, setWinner)
  }, [])

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameToStorage({ board: newBoard, turn: newTurn })

    checkWinner(newBoard, setWinner)
  }

  return (
    <main className='board'>
      <h1> Tic Tac Toe </h1>
      <button onClick={resetGame}>
        Empezar de nuevo
      </button>
      <section className='game'>
        <Board board={board} updateBoard={updateBoard} />
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
