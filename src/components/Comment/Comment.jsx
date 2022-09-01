import React, { useState } from 'react'
import NewComment from '../NewComment'
import './Comment.scss'

export default function Comment(props) {
  const { author, id, children } = props
  const [respond, setRespond] = useState(false)

  function itemRespond() {
    if (!respond) {
      return <> </>
    }
    return (
      <NewComment
        parentId={id}
        closeComponent={() => setRespond(false)}
        submitText="Responder"
      />
    )
  }
  return (
    <div>
      {author}
      {children}
      <button type="button" onClick={() => setRespond(true)}>
        resposder
      </button>
      {itemRespond()}
      <div className="responses">{null}</div>
    </div>
  )
}
