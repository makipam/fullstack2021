import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdoteOf } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(({anecdotes, filter}) => {
        if (filter === '') {
            return anecdotes
        } else {
            return anecdotes.filter(n => n.content.toUpperCase().includes(filter.toUpperCase()))
        }
    })

    const dispatch = useDispatch()

    const vote = (id) => {
        const anecdoteFound = anecdotes.find(n => n.id === id)

        dispatch(voteAnecdoteOf(anecdoteFound))
        dispatch(setNotification(`you voted '${anecdoteFound.content}'`, 10))
        /*dispatch(notificationChange(`You voted '${name}'`))
        setTimeout(() => {
            dispatch(hideNotification())
          }, 5000)*/
    }

    return (
        <div>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
              </div>
            </div>
          )}
          </div>
    )

}

export default AnecdoteList