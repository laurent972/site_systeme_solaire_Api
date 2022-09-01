import { Typography, useTheme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetThePlanet } from '../../api/services';
import PlanetDetails from '../../components/Planet';
import {Body} from '../../types/planets';


type PlanetParams = {
    id : string;
}

const PlanetPage: React.FC = () => {
    
    const {id} = useParams<PlanetParams>();
    const [onePlanet,setOnePlanet] = useState<Body | null>(null);
   
    
    
    useEffect(() => {
        GetThePlanet(id).then(response =>{
            setOnePlanet(response)
        }); 
      },[])
    
    return(
      <>
        <PlanetDetails onePlanet={onePlanet} />
      </>       
    )

  }

export default PlanetPage;