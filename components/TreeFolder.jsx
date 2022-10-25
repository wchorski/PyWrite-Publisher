import { useState } from "react";
import  Link  from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillFolderOpen, AiFillFolder } from "react-icons/ai";
import { TbMarkdown } from "react-icons/tb";

export default function TreeFolder({ explorer }) {

  // console.log('explorer tree: ', explorer);

  const [isExpand, setExpand] = useState(false);

  const expandFolder = (e) => {
    setExpand(!isExpand)
    console.log(e);
  }

  return (
    
    <>
        {explorer.isDir && (
          <li className="nav-link-item">
            <span onClick={() => expandFolder()} className={isExpand ? 'nav-arrow open' : 'nav-arrow'}> <MdKeyboardArrowRight /> </span>

            <Link href={explorer.link}>
              <a> 
                {isExpand 
                  ? <AiFillFolderOpen style={{color: "var(--c-1)"}} /> 
                  : <AiFillFolder style={{color: "var(--c-1)"}} /> 
                }
                
                
                {explorer.name}
              </a>
            </Link> 
          </li>
        )}

        {!explorer.isDir && (
          <li className="nav-link-item" style={{ paddingLeft: 20 }}>

            <Link href={explorer.link}>
              <a> 
                <TbMarkdown />
                {explorer.name}
              </a>
            </Link> 
          </li>
        )}


        {/* <br /> */}
        {/* <div className="accordion" style={{ display: isExpand ? "block" : "none", paddingLeft: 15 }}>
          {explorer.children?.map((explore) => (
            <TreeFolder key={explore.name} explorer={explore} />
          ))}
        </div> */}
        <div className="accordion" style={{ maxHeight: isExpand ? "100vh" : "0", paddingLeft: 15, overflow: "hidden" }}>
          {explorer.children?.map((explore) => (
            <TreeFolder key={explore.name} explorer={explore} />
          ))}
        </div>
    </>

  )
}