import React from 'react'
import explorer from '../public/vaultTree.json'
import { StyledTreeFolder } from "styles/TreeFolder.styled";
import  TreeFolder  from "components/TreeFolder";


export const NavTree = () => {

  // console.log('explorer real: ', explorer);

  return (
    <StyledTreeFolder>

      <TreeFolder explorer={explorer}/>
    
    </StyledTreeFolder>
  )
}
