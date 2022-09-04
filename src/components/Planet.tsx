import { Card, CardMedia,CardContent,Typography,List ,ListItem, ListItemText} from '@material-ui/core';
import React from 'react';
import { Grid } from '@material-ui/core';
import {Body} from '../types/planets';
import { useHistory } from 'react-router-dom'


interface PlanetDetailsProps {
    onePlanet : Body | null
}

const PlanetDetails: React.FC<PlanetDetailsProps> = ({onePlanet}) => {
     const history = useHistory();

    const handleOnSubmit = () => {
       history.push('/');
       }; 
    let img = "https://media.lesechos.com/api/v1/images/view/61fd23998fe56f101b3e4540/1280x720/070887130090-web-tete.jpg";
 
   const loadImg = (planetName: any | null) => {
    switch(planetName){
        case "uranus":
          img="https://images.unsplash.com/photo-1639874897442-8b6d5a181cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2030&q=80"
          break
        case "jupiter":
          img="https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/4/d944663dfe_50191912_jupiter-anneaux-stephen-kane-ucr.jpg"
        break
        case "terre":
          img="https://www.tomsguide.fr/content/uploads/sites/2/2022/08/nasa-vhsz50aafas-unsplash-1024x768.jpg"
        break
        case "neptune":
          img="https://images.unsplash.com/photo-1639921884918-8d28ab2e39a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80"
        break
        case "mercure":
          img="https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/e/d/f/edf75f57d9_82666_mercureok.jpg"
        break
        case "saturne":
          img="https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg"
        break
        case "venus":
          img="https://cdn.futura-sciences.com/buildsv6/images/wide1920/b/1/4/b14c8f7a8f_119688_venus-uv1-akatskuki-damiabouic.jpg"
        break
        case "mars":
          img="https://starwalk.space/gallery/images/mars-the-ultimate-guide/1920x1080.jpg"
        break
         default:
          img ="https://media.lesechos.com/api/v1/images/view/61fd23998fe56f101b3e4540/1280x720/070887130090-web-tete.jpg"
        break
    }
  }   
   
    return (
        
        <div className='post'>     
           {loadImg(onePlanet?.id)}
            <Card>
            <CardMedia
                component="img"
                alt={onePlanet?.name}
                height="350"
                image={img}
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