import { Square } from './Square'

export const WinnerModal = ({ winner, resetGame }) => {
  if (winner == null) return null

  return (
    <section className='winner'>
      <div className='text'>
        <h2>
          {winner === false ? 'Empate' : 'Ganó: '}
        </h2>

        {
          winner && (
            <header className='win'>
              <Square>{winner}</Square>
            </header>
          )
        }

        <footer>
          <button onClick={resetGame}>
            Empezar de nuevo
          </button>
        </footer>
      </div>
    </section>
  )
}
