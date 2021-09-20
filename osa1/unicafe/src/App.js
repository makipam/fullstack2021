import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  if (props.good+props.neutral+props.bad === 0) {
    return (
      <div>
      <div>No feedback given</div>
      </div>
    )
  }
  return (
    <table>
      <tbody>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={props.good+props.neutral+props.bad} />
      <StatisticLine text="average" value ={(props.good-props.bad)/(props.good+props.neutral+props.bad)} />
      <StatisticLine text="positive" value ={props.good/(props.good+props.neutral+props.bad)*100} />
      </tbody>
    </table>
    
  )
}

const StatisticLine = (props) => {
  if (props.text === "positive") {
    return (
        <tr>
        <td>{props.text}</td> 
        <td>{props.value} %</td>
      </tr>
    )
  }
  return (
      <tr>
        <td>{props.text}</td> 
        <td>{props.value}</td>
      </tr>
  )

}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App