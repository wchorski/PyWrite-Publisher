import {} from 'dotenv/config'
import { __rootDir } from "../root-path.mjs";
import { buildVaultTree, unFlatten } from "./buildVaultTree.mjs";
import { writeNodeJSON  } from "./writeNodeData.mjs";
import { moveAttachments } from './moveAttachments.mjs'

const treeData = buildVaultTree(__rootDir+'/MarkdownVault')
// const treeData = buildVaultTree(process.env.NEXT_PUBLIC_VAULTROOT)

// for graph data
writeNodeJSON(treeData)

// for left nav tree
unFlatten(treeData)

moveAttachments(__rootDir+`/MarkdownVault/_attachments`, __rootDir+'/public/_attachments')