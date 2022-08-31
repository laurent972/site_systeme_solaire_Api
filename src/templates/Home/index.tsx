import React, { FC, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { RootObject, Body} from '../../types/planets'

import * as SC from './styled'

export type HomeTemplateProps = {
  allPosts?: RootObject | null,
  bodies?: Body[];
}

const HomeTemplate: FC<HomeTemplateProps> = (props) => {

 console.log(props.bodies);

  return (
    
      <>
        <div className="post-container">
            <h1>page principale</h1>
            <div style={{display:'flex', flexDirection:'column'}}>
              <ul>
              {props.bodies?.map(planet => (
                  <li key={planet.id}>
                    <NavLink to={planet.id} >
                      {planet.name}
                    </NavLink>
                    </li>
                ))}
              </ul>
            </div>
        </div>
      </>
    
  )
}

export default HomeTemplate
