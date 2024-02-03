// import { useState } from 'react'
interface SquareProps {
  value: string | null
  onSquareClick: () => void
}

export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <>
      <button className='h-[50px] p-3 border border-white' onClick={onSquareClick}>
        {value}
      </button>
    </>
  )
}
