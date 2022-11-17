import React, { useState, useEffect} from 'react'
import Link from 'next/link'
import { format } from 'date-fns'
import {StyledRecentNotes} from 'styles/RecentNotes.styled'
import jsonData from 'public/vaultTreeFlat.json'

export const RecentNotes = () => {

  const [recentData, setrecentData] = useState([])

  function getRecentData(data) {

    let threshold = new Date()
    threshold.setDate(threshold.getDate() - 0)

    data.map(note => {
      const dateMod = new Date(note.dateMod)

      // console.log('note, ', note);
      if(dateMod.getTime() < threshold.getTime() ){

        setrecentData((prev) => [...prev, note])
      }
    })
  }

  useEffect(() => {

    getRecentData(jsonData)

  
    // return () => {
    //   second
    // }
  }, [])
  

  return (
    <StyledRecentNotes>
      <h2>Recently Updated</h2>

      <ul>
        {recentData.slice(0,6).map((note, i) => {
          return(
            <li key={i}>
              <Link href={note.link}>
                <a>
                  <h4>{note.name}</h4>
                  <small>{format(new Date(note.dateMod), 'MM/dd/yyyy')}</small>
                  <p>{note.excerpt}</p>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>

    </StyledRecentNotes>
  )
}
