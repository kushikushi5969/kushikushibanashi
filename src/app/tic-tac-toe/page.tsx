'use client'
import { useState } from 'react'
import Square from '../components/square'

export default function TutorialPage() {
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClick(i: number) {
    if (squares[i] || calculateWinner({ squares })) return

    const newSquares = squares.slice()

    if (xIsNext) {
      newSquares[i] = 'X'
    } else {
      newSquares[i] = 'O'
    }

    setSquares(newSquares)
    setXIsNext(!xIsNext)
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
      <main>
        <section className='container inner mt-5'>
          <h1 className='text-green text-lg font-bold '>三目並べ</h1>
          <div className='flex gap-5 mt-5'>
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
            <div className='text-red'>{status}</div>
          </div>
        </section>
      </main>
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
