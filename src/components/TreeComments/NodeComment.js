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
    // most recent comment at the begining
    this.#children = [newChild, ...this.#children]
  }
}

export default NodeComment
