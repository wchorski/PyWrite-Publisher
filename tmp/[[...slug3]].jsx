import React from 'react'
import { getAllSlugs, getSlugData } from 'libs/slugs';
// import { copyDir } from "libs/convertDirToNext";
// import { cloneAFile } from "../../libs/clonefile";
import { Post } from "components/Post";
// import {Layout} from '../../components/Layouts';
import { useRouter } from 'next/router'

export default function PostBySlug({postData}){

  const router = useRouter()
  console.log(router.asPath);

//  TODO you could write a fetch(`${asPath}`

  return (
    <Post postData={postData} />
  )
}


export async function getStaticPaths() {
  const paths = getAllSlugs();

  // copyDir("./vaultTest", "./pages/vault") 
 
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {


  // Add the "await" keyword like this:
  const postData = await getSlugData(params.slug);
  
  return {
    props: {
      postData,
    },
  };
}