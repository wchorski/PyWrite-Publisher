import fs from 'fs'
// const { readdir } = require('fs/promises');
import path from 'path'
import { remark } from 'remark';
import html from 'remark-html';
import matter from "gray-matter";
// import { fileURLToPath } from 'url';

// import { getAllFilepaths } from "libs/filePaths";
// import { getMarkdownData } from "libs/filePaths";

const Test = (props) => {

  const {frontmatter, slug, contentHtml} = props

  return (
    <>

      {/* use for ARRAY */}
      {/* {props.filepath.map((path, i) =>{
        return <span key={i}>{path}/</span> 
      })} */}

      <h1>{slug}</h1>
      <br />
      <small>{frontmatter?.title}</small> | <small>{frontmatter?.date}</small>

      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

    
    </>
  );
};

const fakeData = [
  {
    path: [ '.', 'vaultClean', 'Home_Lab_🏠' ],
  
  },
  {
    path: [ '.', 'vaultClean', 'hotkeys' ],
  
  },
  {
    path: [ '.', 'vaultClean', 'one' ],
  
  },
  {
    path: [ '.', 'vaultClean', 'space_in_name' ],
  
  },
  {
    path: [ '.', 'vaultClean', '.obsidian', 'justatest' ],
  
  },
  {
    path: [ '.', 'vaultClean', 'folder_w_space_3', 'Home_Lab_🏠' ],
  
  },
  {
    path: [
      '.',
      'vaultClean',
      'folder_w_space_3',
      'nestedfolder',
      'nestedTest'
    ],
  
  },
  {
    path: [ '.', 'vaultClean', 'special', 'apostropy~.' ],
  
  },
  {
    path: [ '.', 'vaultClean', 'special', 'comma.~speration' ],
  
  },
  {
    path: [ '.', 'vaultClean', 'special', 'linkpage' ],
  
  },
  {
    path: [ '.', 'vaultClean', 'special', 'test' ],
  
  },
  {
    path: [ '.', 'vaultClean', 'special', 'this~+~that' ],
  
  },
  {
    path: [ '.', 'vaultClean', 'special', 'two_spaces_here' ],
  
  }
]

// ===== BACKEND ===== 
export async function getStaticPaths(){
  console.log('----getstaticpaths');
  // const files = getAllFilepaths('./vaultClean/') //? NEEDS TRAILING SLASH
  const files = fakeData

  // const paths = files.map(file => ({
  //   params: {
  //     slug: file.path
  //   }
  // }))

  const otherpaths = files.map(file => {
    console.log('file.path: ', file.path);
  })
    
  console.log("--otherpaths", otherpaths);

  // temp bypass 
  const paths = [{
    params: {
      //    THIS NEEDS TO BE AN ARRAY OF STRINGS ['special', 'test']
      slug: ['special', 'test']
    }
  }]


  return{ paths, fallback: false}
}


export async function getStaticProps({ params: { slug } }) {

  console.log('===== static props');
  console.log("----slugyyyy: ",slug);

  const joinedSlug = slug.join("/") 
  
  // const fullPath = path.join('./vaultClean/', `${slug}.md`);
  const fullPath = `./vaultClean/${joinedSlug}.md`
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      slug,
      ...matterResult.data,
      contentHtml,
    },
  }
}

async function getAllFilepaths(path) {
  
  const entries = await readdir(path, { withFileTypes: true });
  
  // Get files within the current directory and add a path key to the file objects
  const files = entries
    .filter(entry => !entry.isDirectory())
    .map(file => {
      const pathArray = path.split("/").filter(Boolean) //? cleans up empty array entries -> ''
      pathArray.push(file.name.replace(/\.md$/, ''))

      const convertedFile = ({ ...file, path: pathArray })
      return convertedFile
    });


  // Get folders within the current directory
  const folders = entries.filter(entry => entry.isDirectory());


  for (const folder of folders){
    /*
    Add the found files within the subdirectory to the files array by calling the
    current function itself
    */  
    files.push(...await getAllFilepaths(`${path}${folder.name}/`));
  }
  
  // console.log('=====files', files);
  // return files; //this prints out correctly

  return files.map(file =>{
    return{
      params: {
        slug: file.path
      }
    }
  })

}


export default Test;