import { Card, CardContent, CardMedia, Container, Typography } from '@material-ui/core';
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
            <Card>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://media.lesechos.com/api/v1/images/view/61fd23998fe56f101b3e4540/1280x720/070887130090-web-tete.jpg"
                title="Contemplative Reptile"
                />
                <CardContent>
                   <Grid container> 
                    <Grid item xs={12} md={6}  >
                            <Typography gutterBottom variant="h1" component="h1">
                            {onePlanet?.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="div">
                            </Typography>
                        </Grid>
                   </Grid>
                </CardContent>
                
            </Card>
            
        </div>
    );
};

export default PlanetDetails;