import React from 'react'

const Course = (props) => {
    return (
      <div>
        <Header header={props.course.name}/>
        <div>
          {props.course.parts.map( part =>
            <Content key={part.id} part={part}/>
          )}
        </div>
        <div>
          <Total total={props.course}/>
        </div>
      </div>
    )
  }

  const Header = (props) => {
    return (
      <div>
        <h1>
          {props.header}
        </h1>
      </div>
    )
  }
  
  const Part = (props) => {
    return (
        <p>
          {props.part} {props.exercises}
        </p>
    )
  }
  
  
  const Content = (props) => {
    return (
      <div>
        <Part part={props.part.name} exercises={props.part.exercises}/>
      </div>
    )
  }
  
  const Total = (props) => {
    const totalPoints = props.total.parts.map(x => x.exercises)
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    return (
      <div>
        <b>
        Total of {totalPoints.reduce(reducer)} exercises 
        </b>
      </div>
    )
  }

export default Course