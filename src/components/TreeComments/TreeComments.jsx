/* eslint-disable no-underscore-dangle */
import React from 'react'
import NodeComment from './NodeComment'
import Comment from '../Comment'

class TreeComments {
  #root

  /**
   *
   * @param {JSON} rootValue {
    author: {
      name,
      email,
    },
    parent: {
      id,
    },
    content,
    likes,
    id,
  }
   */
  constructor(rootValue) {
    if (typeof rootValue !== 'object') {
      throw new Error('params must be type Object')
    }
    this.#root = new NodeComment(rootValue)
  }

  /**
   *
   * @param {Object} valueNewNode
   *
   */
  addNodeComment(valueNewNode, actualNode = this.#root) {
    if (typeof valueNewNode !== 'object') {
      throw new Error('params must be type Object')
    }
    const { id } = actualNode.getValue()
    const { parent } = valueNewNode
    const idChild = parent.id

    if (id === idChild) {
      actualNode.newchild(new NodeComment(valueNewNode))
      return
    }

    actualNode
      .getChindren()
      .forEach((child) => this.addNodeComment(valueNewNode, child))
  }

  generateComponentTreeComments(actualNode = this.#root) {
    const comment = actualNode.getValue()
    const { id, content, author, postDate } = comment
    const { name } = author
    const children = actualNode.getChindren()

    if (!children) {
      return <> </>
    }

    const commentContent = () => {
      const content = []
      children.forEach((childNode, index) => {
        const e = (
          <div key={index}>{this.generateComponentTreeComments(childNode)}</div>
        )
        content.push(e)
      })
      return content
    }

    return (
      <Comment
        author={name}
        id={id}
        content={content}
        postDate={postDate}
        numResponses={children.length}
      >
        {commentContent()}
      </Comment>
    )
  }
}

export default TreeComments
