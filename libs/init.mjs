import { buildVaultTree, unFlatten } from "./buildVaultTree.mjs";
import { writeNodeJSON  } from "./writeNodeData.mjs";

const treeData = buildVaultTree('../vaultClean')

writeNodeJSON(treeData)

unFlatten(treeData)