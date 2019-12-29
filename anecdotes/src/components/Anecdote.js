import React from 'react'

const Anecdote = ({ id, content, votes }) => {
  return (
    <div key={id}>
      <h2>{content}</h2>
      <div>has {votes} votes</div>
    </div>
  )
}

export default Anecdote
