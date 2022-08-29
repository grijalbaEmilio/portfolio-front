import React, { useState } from 'react'
import NewComment from '../NewComment'
import './Comment.scss'

export default function Comment(props) {
  const { authorId, children } = props
  const [respond, setRespond] = useState(false)

  function itemRespond() {
    if (!respond) {
      return <> </>
    }
    return (
      <NewComment
        closeComponent={() => setRespond(false)}
        submitText="Responder"
      />
    )
  }
  return (
    <div>
      {authorId}
      {children}
      <button type="button" onClick={() => setRespond(true)}>
        resposder
      </button>
      {itemRespond()}
    </div>
  )
}
