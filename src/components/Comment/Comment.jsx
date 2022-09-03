import React, { useState } from 'react'
import NewComment from '../NewComment'
import { dateFormat } from '../../config/helpers'
import './Comment.scss'

export default function Comment(props) {
  const { author, id, children, content, postDate } = props
  const [respond, setRespond] = useState(false)
  const [responses, setResponses] = useState(false)

  function vewReponds() {
    if (!responses) {
      return <> </>
    }
    return <div className="comment-responses">{children}</div>
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
    <div className="comment">
      <h2 className="comment-content">{content}</h2>
      <h5 className="comment-author">{author}</h5>
      <p>{dateFormat(postDate)}</p>
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
