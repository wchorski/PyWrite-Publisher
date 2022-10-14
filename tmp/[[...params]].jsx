import React from 'react'
// import { getAllSlugs, getSlugData } from 'libs/slugs';

// import { copyDir } from "libs/convertDirToNext";
// import { cloneAFile } from "../../libs/clonefile";
// import { Post } from "components/Post";
// import {Layout} from '../../components/Layouts';
import { useRouter } from 'next/router'

export default function PostBySlug({postData}){

  const query = useRouter().query
  const { params = [] } = query
  console.log(params);

//  TODO you could write a fetch(`${asPath}`

  if(params.length > 0 ){
    return(
      <h1>dynamic content</h1>
    )
  }

  if(params.length === 0 ){
    return(
      <h1>Vault Home: postbyslug</h1>
    )
  }
}


export async function getStaticPaths() {
  // const paths = getAllSlugs();


  // copyDir("./vaultTest", "./pages/vault") 
 
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps( {params} ) {

  console.log("== PARAMS ==");
  console.log(params);
  console.log("== end ==");

  // Add the "await" keyword like this:
  // const postData = await getSlugData(params.slug);

  // const postData = await getSlugData(params);
  
  // return {
  //   props: {
  //     postData,
  //   },
  // };
}