const TreeComments = require('../class/TreeComments')

const tree = new TreeComments({
  author: {
    name: 'pancho',
    email: 'pancho@gmail.com',
  },
  parent: null,
  content: 'comentario equis X2',
  likes: 0,
  id: '630ebaaa669d38fc810511b2',
})

console.log('---------------')
tree.addNodeComment({
  author: {
    name: 'pancho',
    email: 'pancho@gmail.com',
  },
  parent: {
    id: '630ebaaa669d38fc810511b2',
  },
  content: 'comentario equis X2',
  likes: 0,
  id: '630ebb67d7505a7460afe94a',
})

tree.addNodeComment({
  author: {
    name: 'pancho',
    email: 'pancho@gmail.com',
  },
  parent: {
    id: '630ebaaa669d38fc810511b2',
  },
  content: 'comentario equis X2',
  likes: 0,
  id: '630ebd3355f3c805659ae334',
})

tree.addNodeComment({
  author: {
    name: 'pancho',
    email: 'pancho@gmail.com',
  },
  parent: {
    id: '630ebd3355f3c805659ae334',
  },
  content: 'full comment apa',
  likes: 0,
  id: '630ebe20095307de315d8801',
})

console.log(tree.visitComments())
console.log('---------------')
