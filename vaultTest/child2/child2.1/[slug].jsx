import React from 'react'
import { getAllPostIds, getPostData } from '../../libs/posts';
import { copyDir } from "../../libs/directoryConverter";
// import { cloneAFile } from "../../libs/clonefile";
import { Post } from "../../components/Post";
// import {Layout} from '../../components/Layouts';

export default function PostBySlug({postData}){

  return (
    <Post postData={postData} />
  )
}


export async function getStaticPaths() {
  
  copyDir("./vaultTest", "./pages/vault")

  const paths = getAllPostIds();
 
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {

  // console.log("== PARAMS ==");
  // console.log(params);
  // console.log("== end ==");
  // Add the "await" keyword like this:
  const postData = await getPostData(params.slug);
  
  return {
    props: {
      postData,
    },
  };
}