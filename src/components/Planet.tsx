import { Card, CardMedia,CardContent,Typography,List ,ListItem, ListItemText} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import {Body} from '../types/planets';
import { useHistory } from 'react-router-dom'
import {loadImg, img} from '../api/services'

interface PlanetDetailsProps {
    onePlanet : Body | null
}

const PlanetDetails: React.FC<PlanetDetailsProps> = ({onePlanet}) => {
     const history = useHistory();

    const handleOnSubmit = () => {
       history.push('/');
    }; 


    const [imgPlanet,setImgPanet] = useState('')
    useEffect(()=>{
       loadImg(onePlanet?.id)
        setImgPanet(img)
    },)


    return (
        
        <div className='post'>     
          
            <Card>
            <CardMedia
                component="img"
                alt={onePlanet?.name}
                height="350"
                image={imgPlanet}
                title={onePlanet?.name}
                />
                <CardContent>
                <button onClick={handleOnSubmit}>
                                Retour
                            </button>
                   <Grid container justify='center'> 
                   
                        <Grid item xs={12} md={6}>
                            <Typography gutterBottom variant="h1" component="h1">
                                {onePlanet?.name}
                            </Typography>
                            <List disablePadding>
                                <ListItem dense>
                                    <ListItemText
                                    primary='Découvert par'
                                    secondary={onePlanet?.discoveredBy}
                                    />
                                </ListItem>
                                <ListItem dense>
                                    <ListItemText
                                     primary='Découvert en'
                                     secondary={onePlanet?.discoveryDate}
                                    />
                                </ListItem>
                                <ListItem dense>
                                    <ListItemText
                                     primary='Type de corps'
                                    secondary={onePlanet?.bodyType}
                                    />
                                </ListItem>
                                <ListItem dense>
                                    <ListItemText
                                    primary='Nom en anglais :'
                                    secondary={onePlanet?.englishName}
                                    />
                                </ListItem>
                                <ListItem dense>
                                    <ListItemText
                                    primary='Volume'
                                    secondary={onePlanet?.vol.volValue}
                                    />
                                </ListItem>
                                <ListItem dense>
                                    <ListItemText
                                    primary='Masse'
                                     secondary={onePlanet?.mass.massValue}
                                    />
                                </ListItem>
                                <ListItem dense>
                                    <ListItemText
                                    primary='Lunes'
                                     secondary={onePlanet?.moons ? onePlanet?.moons.map((moon=>moon.moon + '-')) : 'Pas de lune trouvée'}
                                    />
                                </ListItem>
                            </List>     
                        </Grid>
                   </Grid>
                  
                </CardContent>
                
            </Card>
           
        </div>
    );
};

export default PlanetDetails;