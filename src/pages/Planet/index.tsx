import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {Body} from '../../types/planets';

type PlanetParams = {
    id : string;
}

const PlanetPage: React.FC = () => {

    const [onePlanet,setOnePlanet] = useState<Body | null>(null);
    const {id} = useParams<PlanetParams>();

    return(

        <h1>TOTO</h1>
    )

  }

export default PlanetPage;