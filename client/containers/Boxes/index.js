
import React from 'react'
import Box from '../../components/Box'
import style from './style.css'

function Boxes({ linksObj }) {
  const boxArr = Object.keys(linksObj).map(site => {
    return <Box site={ site } links={ linksObj[site] } />
  })
  
  return <div>{ boxArr }</div>
}

export default Boxes
