import { Button, Card, CardActions, CardContent, CardMedia, GridList } from '@material-ui/core'
import React, { FC, FormEvent, ReactChild, ReactNode, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import PlanetList from '../../components/PlanetList'

import { RootObject, Body} from '../../types/planets'

export type HomeTemplateProps = {
  bodies?: Body[];
}


const HomeTemplate: FC<HomeTemplateProps> = (props) => {
    
    
    const [searchTerm, setSearchTerm] = React.useState(''); 
    const [planetsList, setPlanetsList] = React.useState(props?.bodies)
    const [searchEngine, setSearchEngine] = useState(false);
   
    
    const handleOnClick = (e:any) => {
        e.preventDefault();
        const findSearch:any = planetsList?.filter((planet : any)=>planet?.name === searchTerm )
        setPlanetsList(findSearch)
        setSearchEngine(true)
   }
    useEffect(()=>{
      {searchEngine ? planetsList :setPlanetsList(props?.bodies)}
    },)
    
   
  return (
      <>
        {console.log(planetsList)};

         <div className="Input_wrapper">
          
          <input type="text" placeholder="Rechercher une planete" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value) } />
          <button disabled={!searchTerm} onClick={handleOnClick}>GO</button>

        </div> 

        {console.log(planetsList)};
        <section className="post-container container-fluid py-5 px-5 row d-flex justify-content-evenly ">
              {planetsList?.map((planet:any) => (
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
