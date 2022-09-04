import { Card,CardActions, Button, CardMedia,CardContent,Typography,List ,ListItem, ListItemText} from '@material-ui/core';
import React from 'react';
import {Body} from '../types/planets';
import { useHistory } from 'react-router-dom'


interface PlanetProps {
    planet : Body | null,
    img: string,
    id:string
}

const PlanetCard: React.FC<PlanetProps>= ({planet,img, id}) => {
    const history = useHistory();

     const handleOnSubmit = () => {
        history.push(id);
        };

    return (
        <>
        <Card> 
                <CardMedia
                    component="img"
                    alt={planet?.name}
                    height="140"
                    src={img}
                    title={planet?.name}
                    />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2" color="primary">
                        {planet?.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="div">
                    <List disablePadding>
                        <ListItem dense>
                            <ListItemText
                            primary='Nom en anglais :'
                            secondary={planet?.englishName}
                            />
                        </ListItem>
                        <ListItem dense>
                            <ListItemText
                            primary='Volume'
                            secondary={planet?.vol.volValue}
                            />
                        </ListItem>
                        <ListItem dense>
                            <ListItemText
                            primary='Masse'
                            secondary={planet?.mass.massValue}
                            />
                        </ListItem>
                    </List>
                    </Typography>
                </CardContent>
            <CardActions> 
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                onClick={handleOnSubmit}
                                >
                                Plus de détails
                            </Button>
            </CardActions>
        </Card>
        
        </>
    );
};

export default PlanetCard;