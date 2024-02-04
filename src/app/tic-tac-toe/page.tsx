'use client'
import { useState } from 'react'
import Square from '../components/square'

function TicTacToeBoard({
  xIsNext,
  squares,
  onPlay,
}: {
  xIsNext: boolean
  squares: string[]
  onPlay: (nextSquares: string[]) => void
}) {
  function handleClick(i: number) {
    if (squares[i] || calculateWinner({ squares })) return

    const nextSquares = squares.slice()

    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
    onPlay(nextSquares)
  }

  const judge = calculateWinner({ squares })
  let status
  if (judge === '引き分け') {
    status = judge
  } else if (judge) {
    status = '勝者： ' + judge
  } else {
    status = '次のプレイヤー： ' + (xIsNext ? 'X' : 'O')
  }

  return (
    <>
      <div className='grid grid-cols-buttonRow gap-1'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <div className=''>{status}</div>
    </>
  )
}

function calculateWinner({ squares }: { squares: string[] }) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    } else if (!squares.some((square) => square === null)) {
      return '引き分け'
    }
  }
  return null
}

export default function TicTacToeGame() {
  const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState([Array(9).fill(null)])
  const currentSquares = history[history.length - 1]

  function handlePlay(nextSquares: string[]) {
    setHistory([...history, nextSquares])
    setXIsNext(!xIsNext)
  }

  function jumpTo(nextMove: number) {
    setHistory(history.slice(0, nextMove + 1))
    setXIsNext(nextMove % 2 === 0)
  }

  const moves = history.map((step, move) => {
    let description
    if (move > 0) {
      description = move + '手目'
    } else {
      description = '最初から'
    }
    return (
      <li key={move} className='border border-white w-[80px] p-1 text-center'>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <>
      <main className='container inner'>
        <section className='mt-5'>
          <h1 className='text-white text-lg font-bold '>三目並べ</h1>
          <div className='flex flex-wrap gap-5 mt-5'>
            <TicTacToeBoard xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          </div>
          <div className='mt-10'>
            <ol>{moves}</ol>
          </div>
        </section>
      </main>
    </>
  )
}
