import { Button, Card, CardActions, CardContent, CardMedia, GridList } from '@material-ui/core'
import React, { FC, FormEvent, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { RootObject, Body} from '../../types/planets'

export type HomeTemplateProps = {
  bodies?: Body[];
  planetList?:Body[]| null
  
}


const HomeTemplate: FC<HomeTemplateProps> = (props) => {
    
    
    const [searchTerm, setSearchTerm] = React.useState('');    
    const planetsList = props.bodies
    console.log(planetsList);

    const Search = (searchTerm:string) => {
      console.log(planetsList);
        const findSearch= planetsList?.filter((planet)=>planet?.name === searchTerm);
        console.log(findSearch);
        
   }

   if(searchTerm != '')Search(searchTerm) 
    
  return (
      <>
        
         <div className="Input_wrapper">
            <input type="text" placeholder="Rechercher une planete" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value) } />
        </div> 


        <section className="post-container container-fluid py-5 px-5 row d-flex justify-content-evenly ">
              {planetsList?.map(planet => (
                    <div className="card col-md-2 mb-5 mx-1" key={planet.id} >
                      <img src="https://img-4.linternaute.com/Y18chXpOW47ROCLs7d7eDJW5V98=/1500x/smart/c938cc2a251e46bfb024720805f60fc9/ccmcms-linternaute/34924577.jpg" className="card-img-top" alt="..."></img>
                      <div className="card-body">
                        <h5 className="card-title">
                          <NavLink to={planet.id} >
                            {planet.name}
                          </NavLink>
                        </h5>
                        
                        <NavLink to={planet.id} >
                          En savoir plus
                        </NavLink>
                        </div>
                    </div>
                ))}

        </section>
      </>
    
  )
}

export default HomeTemplate
