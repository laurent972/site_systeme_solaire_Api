import { Card,CardActions, Button, CardMedia,CardContent,Typography,List ,ListItem, ListItemText} from '@material-ui/core';
import React from 'react';
import { Grid } from '@material-ui/core';
import {Body} from '../types/planets';



interface PlanetDetailsProps {
    onePlanet : Body | null
}

const PlanetDetails: React.FC<PlanetDetailsProps> = ({onePlanet}) => {
 
    console.log(onePlanet);
    
    return (

        <div className='post'>
            
            {onePlanet?.moons.map(moon => {
                                        console.log(moon.moon);
                                        
                                         <h1 key={moon.moon}>{moon.moon}</h1>
                                       
                                    })}   
                                   
        
            <Card>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="350"
                image="https://media.lesechos.com/api/v1/images/view/61fd23998fe56f101b3e4540/1280x720/070887130090-web-tete.jpg"
                title="Contemplative Reptile"
                />
                <CardContent>
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
                                     secondary={onePlanet?.moons.map((moon=>moon.moon + '-'))}
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