import React from 'react'
// import { getAllSlugs, getSlugData } from 'libs/slugs';
// import { copyDir } from "libs/convertDirToNext";
// import { cloneAFile } from "../../libs/clonefile";
import { Post } from "components/Post";
// import {Layout} from '../../components/Layouts';

export default function PostBySlug( {ninja} ){

  return (
    <h1>Ninja: {ninja.name}</h1>
    // <Post postData={postData} />
  )
}


export async function getStaticPaths() {

  console.log('----NINJA getStaticPaths');

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map(ninja => {
    return {
      params:{
        ninjas: 'VARIABLEES',
        id: ninja.id.toString(),
      }
    }
  })
  // copyDir("./vaultTest", "./pages/vault") 
 
  return {
    paths,
    fallback: false,
  };
}


// todo figure out how to use static stuff so all files can be statically generated 

export async function getStaticProps( {params} ) {

  console.log('----NINJA getstaticProps');

  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id)
  const data = await res.json()
  
  return {
    props: {
      ninja: data,
    },
  };
}