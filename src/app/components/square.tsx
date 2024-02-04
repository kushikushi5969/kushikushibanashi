interface SquareProps {
  value: string | null
  onSquareClick: () => void
}

export default function Square({ value, onSquareClick }: SquareProps) {
  const color = value === 'X' ? 'value-x' : 'value-o'
  return (
    <>
      <button className={`${color} h-[50px] p-3 border border-white`} onClick={onSquareClick}>
        {value}
      </button>
    </>
  )
}
