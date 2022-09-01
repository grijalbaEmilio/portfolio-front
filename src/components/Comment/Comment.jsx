import React, { useState } from 'react'
import NewComment from '../NewComment'
import './Comment.scss'

export default function Comment(props) {
  const { author, id, children, content } = props
  const [respond, setRespond] = useState(false)
  const [responses, setResponses] = useState(false)

  function vewReponds() {
    if (!responses) {
      return <> </>
    }
    return <div className="responses">{children}</div>
  }

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
      {content}
      <button type="button" onClick={() => setRespond(true)}>
        resposder
      </button>
      {itemRespond()}
      <button type="button" onClick={() => setResponses(!responses)}>
        ver respuestas
      </button>
      {vewReponds()}
    </div>
  )
}
