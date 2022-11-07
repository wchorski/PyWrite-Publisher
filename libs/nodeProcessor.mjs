import nodeData from '../public/nodeData.json' assert {type: 'json'}

const colors = [
  ['#87BA48', '#B0DE77', '#CFEFA8'],
  ['#CDAF4F', '#F4D983', '#FFEDB3'],
  ['#47448F', '#6A67AA', '#9997CA'],
  ['#B04470', '#D17198', '#E6A2BD'],
]

const MAIN_NODE_SIZE = 20
const CHILD_NODE_SIZE = 7
const LEAF_NODE_SIZE = 3
const DEFAULT_DISTANCE = 100
const MAIN_NODE_DISTANCE = 50
const LEAF_NODE_DISTANCE = 0
export const MANY_BODY_STRENGTH = -30

export const nodes = []
export const links = []


export function buildNodesAndLinks(){

  nodeData.forEach(node => {
    if(node.friends.length > 0){
      node.size = CHILD_NODE_SIZE
      node.color = colors[0][0]
      nodes.push(node)
    }
  })

  nodes.forEach(node => {
    if(node.friends.length > 0){

      node.friends.forEach(friend => {
        const friendNode = nodes.find(n => n.id === friend)

        if(friendNode) links.push({source: node, target: friendNode, distance: DEFAULT_DISTANCE, color: node.color})
      })
    } else {
      console.log('nahhhh');
    }
  })

}
buildNodesAndLinks()
