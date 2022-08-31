import React from 'react';
import { useParams } from 'react-router';
import {Body} from '../types/planets';


interface PlanetDetailsProps {
    onePlanet : Body | null
}

const PlanetDetails: React.FC<PlanetDetailsProps> = ({onePlanet}) => {
 
    console.log(onePlanet);
    
    return (

        <div className='post'>
            <h1>{onePlanet?.name}</h1>
        </div>
    );
};

export default PlanetDetails;