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
  const paths = getAllPostIds();

  copyDir("./vaultTest", "./pagesTest/vault")
 
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {

  console.log(params);
  // Add the "await" keyword like this:
  const postData = await getPostData(params.fileName);
  
  return {
    props: {
      postData,
    },
  };
}