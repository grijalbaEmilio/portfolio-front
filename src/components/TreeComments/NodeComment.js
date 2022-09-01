class NodeComment {
  #value

  #children = []

  /**
   *
   * @param {Object} value
   */
  constructor(value) {
    if (typeof value !== 'object') {
      throw new Error('params must be type Object')
    }
    this.#value = value
  }

  getValue() {
    return this.#value
  }

  getChindren() {
    return this.#children
  }

  /**
   *
   * @param {NodeComment} newChild
   */
  newchild(newChild) {
    this.#children.push(newChild)
  }
}

// module.exports = NodeComment
export default NodeComment
