/* eslint-disable no-underscore-dangle */
import React from 'react'
import NodeComment from './NodeComment'
import Comment from '../Comment'

// const NodeComment = require('./NodeComment')

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
   * @param {Object} childValue
   *
   */
  addNodeComment(childValue, actualNode = this.#root) {
    if (typeof childValue !== 'object') {
      throw new Error('params must be type Object')
    }
    const { id } = actualNode.getValue()
    const { parent } = childValue
    const idChild = parent.id

    if (id === idChild) {
      actualNode.newchild(new NodeComment(childValue))
      return
    }

    actualNode
      .getChindren()
      .forEach((child) => this.addNodeComment(childValue, child))
  }

  visitComments(actualNode = this.#root, string = '') {
    console.log(
      `${actualNode.getValue().id} tiene ${actualNode.getChindren().length}`
    )
    if (actualNode.getChindren().length === 0) {
      return `${string} \n<div> ${actualNode.getValue().content} </div> `
    }

    let newString = `${string} \n<div> ${actualNode.getValue().content}`

    actualNode.getChindren().forEach((child) => {
      newString = this.visitComments(child, newString)
    })

    newString += ' </div> '

    return newString
  }
  // TODO: good practiced need to do implements

  nn(actualNode = this.#root, num = 1) {
    const { id, content, author } = actualNode.getValue()
    const { name } = author
    const children = actualNode.getChindren()

    if (!children || num === 5) {
      return <> </>
    }
    // console.log(content)

    const childContent = () => {
      const vai = []
      children.forEach((element, index) => {
        const e = <div key={index}>{this.nn(element)}</div>
        vai.push(e)
      })
      return vai
    }

    return (
      <Comment author={name} id={id} content={content}>
        {childContent()}
      </Comment>
    )
  }
}

// module.exports = TreeComments
export default TreeComments
