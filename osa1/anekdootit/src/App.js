import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(7).fill(0))
  

  const nextClick = () => {
    const max = 7
    const rand = Math.floor(Math.random() * max)
    setSelected(rand)
  }

  const voteClick = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)

  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>
      <Button handleClick={voteClick} text='vote' />
      <Button handleClick={nextClick} text='next anecdote'/>
      </div>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[points.indexOf(Math.max(...points))]}</div>
      <div>has {points[points.indexOf(Math.max(...points))]} votes </div>
      </div>
  )
}

export default App