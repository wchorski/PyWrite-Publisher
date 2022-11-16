import { __rootDir } from "../root-path.mjs";

import {cleanVault} from './cleanVault.mjs';
cleanVault(__rootDir+'/vaultOriginal', __rootDir+'/MarkdownVault')

// import {cleanLinks} from './cleanVault.mjs';
// cleanLinks('libs/test space name.md')
