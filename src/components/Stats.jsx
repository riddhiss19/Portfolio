import React from 'react'
import { stats } from '../data'
import parse from 'html-react-parser'

const Stats = () => {
  return (
    <>
    {stats.map(({title},index)=>{    
        return(
            <div className="stats__box" key={index}>
                <p className="stats__title">{parse(title)}</p>
            </div>
        )
    })}
    </>
  )
}

export default Stats
