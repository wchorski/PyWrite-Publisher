import { useState } from "react";
import { Link } from "next/link";

export default function TreeFolder({ explorer }) {

  // console.log('explorer tree: ', explorer);

  const [expand, setExpand] = useState(false);

  return (
    
    <div>
      <span onClick={() => setExpand(!expand)}> ▶ </span>
      {/* //TODO display icon if folder or .md  */}
      <a href={explorer.link}>{explorer.name}</a>
      {/* <Link href={explorer.link.toString()}>
        <a> 
          {explorer.name}
        </a>
      </Link>  */}


      <br />
      <div style={{ display: expand ? "block" : "none", paddingLeft: 15 }}>
        {explorer.children?.map((explore) => (
          <TreeFolder key={explore.name} explorer={explore} />
        ))}
      </div>
    </div>

  )
}