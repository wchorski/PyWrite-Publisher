import { buildVaultTree, unFlatten } from "./buildVaultTree.mjs";

const treeData = buildVaultTree('../vaultClean')
// console.log(treeData);
unFlatten(treeData)