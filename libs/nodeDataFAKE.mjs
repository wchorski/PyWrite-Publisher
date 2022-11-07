// 

const colors = [
  ['#87BA48', '#B0DE77', '#CFEFA8'],
  ['#CDAF4F', '#F4D983', '#FFEDB3'],
  ['#47448F', '#6A67AA', '#9997CA'],
  ['#B04470', '#D17198', '#E6A2BD'],
]

const MAIN_NODE_SIZE = 20
const CHILD_NODE_SIZE = 7
const LEAF_NODE_SIZE = 3
const DEFAULT_DISTANCE = 20
const MAIN_NODE_DISTANCE = 50
const LEAF_NODE_DISTANCE = 0
export const MANY_BODY_STRENGTH = -5

export const nodes = []
export const links = []

let i = 0
const addMainNode = (node) => {
  // if node has > 30 children multiply to size
  node.color = colors[i++][0]
  node.size = MAIN_NODE_SIZE
  nodes.push(node)
}

const nodeArts = {id: "Arts Web"}
addMainNode(nodeArts)

const nodeSocial =  {id: "Social Impact Commons"}
addMainNode(nodeSocial)

connectMainNodes(nodeArts, nodeSocial)

function connectMainNodes(source, target){
  links.push({source: source, target: target, distance: MAIN_NODE_DISTANCE, color: source.color})
}


const addChildNode = (pNode, cNode, size = CHILD_NODE_SIZE, distance = DEFAULT_DISTANCE) => {
  cNode.size = size
  cNode.color = pNode.color
  nodes.push(cNode)
  links.push({source: pNode, target: cNode, distance, color: pNode.color})
}

function assembleChildNode (pNode, id, numOfChildren){
  const childNode = {id: id}
  addChildNode(pNode, childNode)

  for(let i = 0; i < numOfChildren; i++){
    addChildNode(childNode, {id: ""}, LEAF_NODE_SIZE, LEAF_NODE_DISTANCE )
  }
}

assembleChildNode(nodeArts, 'Community Vision', 20)
assembleChildNode(nodeArts, 'Silicon Valley Creates', 10)
assembleChildNode(nodeSocial, 'Theater Bay Area', 3)
assembleChildNode(nodeSocial, 'EasSide Arts Alliance', 7)

