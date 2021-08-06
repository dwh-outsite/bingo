import _ from 'lodash'
import { useEffect, useState } from 'react'

const randomColumn = (start, end) => _.sampleSize(_.range(start, end + 1), 5).map(number => ({ number, marked: false }))
const replaceSpecialCell = column => {
  column[2] = { number: '*', marked: true }
  return column
}

function generateBingoCard() {
  return [
    randomColumn(1, 15),
    randomColumn(16, 30),
    replaceSpecialCell(randomColumn(31, 45)),
    randomColumn(46, 60),
    randomColumn(61, 75),
  ]
}

function Star(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function Cell({ cell, onMark, ...props }) {
  return (
    <button
        className={`
          ${cell.marked ? 'bg-pink-400 text-white' : 'bg-white text-gray-800 hover:bg-pink-200 hover:text-white'}
          rounded-full text-center my-2 mx-1 font-bold text-xl
          flex items-center justify-center focus:outline-none
          h-12 w-12
        `}
        onClick={() => onMark(cell.number)}
        {...props}
    >
      {cell.number == '*' ? <Star className="fill-current h-6 w-6" /> : cell.number}
    </button> 
  )
}

export default function BingoCard() {
  const [card, setCard] = useState()

  useEffect(() => {
    if (typeof(Storage) === "undefined" || window.localStorage.getItem('card') === null) {
      setCard(generateBingoCard())
    } else {
      setCard(JSON.parse(window.localStorage.getItem('card')))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('card', JSON.stringify(card))
  }, [card])

  const markCell = number => {
    setCard(card.map(column => column.map(cell => cell.number === number ? { number, marked: !cell.marked } : cell)))
  }

  return (
    <div className="flex">
      {card && card.map(column => (
        <div key={column.map(cell => cell.number).join()}>
          {column.map(cell => <Cell cell={cell} key={cell.number} onMark={markCell} />)}
        </div>
      ))}
    </div>
  )
}
