import { buildVaultTree, unFlatten } from "./buildVaultTree.mjs";
import { writeNodeJSON  } from "./writeNodeData.mjs";
import { moveAttachments } from './moveAttachments.mjs'

const treeData = buildVaultTree('../MarkdownVault')

// for graph data
writeNodeJSON(treeData)

// for left nav tree
unFlatten(treeData)

moveAttachments('../MarkdownVault/_attachments', '../public/_attachments')