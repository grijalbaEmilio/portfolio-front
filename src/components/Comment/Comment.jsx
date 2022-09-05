import React, { useState } from 'react'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import NewComment from '../NewComment'
import { dateFormat } from '../../config/helpers'
import './Comment.scss'

export default function Comment(props) {
  const { author, id, children, content, postDate, numResponses } = props
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
      <p>
        <b className="comment-author">{`${author}  `}</b>
        {dateFormat(postDate)}
      </p>

      <p className="comment-content">{content}</p>
      <div className="comment-buttons">
        <button
          className="comment-buttons-button"
          type="button"
          onClick={() => setRespond(true)}
        >
          Responder
        </button>
        {!numResponses > 0 ? null : (
          <button
            className="comment-buttons-button"
            type="button"
            onClick={() => setResponses(!responses)}
          >
            Respuestas
            {responses ? <UpOutlined /> : <DownOutlined />}
          </button>
        )}
      </div>
      {itemRespond()}
      {vewReponds()}
    </div>
  )
}
