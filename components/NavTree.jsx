import React from 'react'
import explorer from '../public/vaultTree.json'
// import explorer from '../public/fakeTreeData.json'
// import explorer from "public/fakeTreeData";
import { StyledTreeFolder } from "styles/TreeFolder.styled";
import  TreeFolder  from "./TreeFolder";


export const NavTree = () => {

  // console.log('explorer real: ', explorer);

  return (
    <StyledTreeFolder>

      <TreeFolder explorer={explorer}/>
    
    </StyledTreeFolder>
  )
}
