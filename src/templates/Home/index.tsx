import React, { FC, useEffect, useState } from 'react'

import PlanetList from '../../components/PlanetList'
import { RootObject } from '../../types/planets'

import * as SC from './styled'

export type HomeTemplateProps = {
  allPosts?: RootObject | null
}

const HomeTemplate: FC<HomeTemplateProps> = (props) => {

 console.log(props);
 
  
  

  return (
    
      <>
        <div className="post-container">
            <h1>page principale</h1>
            <div style={{display:'flex', flexDirection:'column'}}>
             
            </div>
        </div>
      </>
    
  )
}

export default HomeTemplate
