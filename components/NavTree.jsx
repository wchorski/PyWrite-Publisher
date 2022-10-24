import React from 'react'
import explorer from '../public/vaultTree.json'
// import explorer from '../public/fakeTreeData.json'
// import explorer from "public/fakeTreeData";
import  TreeFolder  from "./TreeFolder";


export const NavTree = () => {

  // console.log('explorer real: ', explorer);

  return (

    <TreeFolder explorer={explorer}/>
  )
}
