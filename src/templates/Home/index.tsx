import {  Box, Button, Container, Grid, Paper } from '@material-ui/core'
import React, { FC, useEffect, useState } from 'react'
import PlanetCard from '../../components/PlanetCard'
import {Body} from '../../types/planets'
import {loadImg, img} from '../../api/services'

export type HomeTemplateProps = {
  bodies?: Body[],
}

const HomeTemplate: FC<HomeTemplateProps> = (props) => {
  
    const [searchTerm, setSearchTerm] = React.useState(''); 
    const [planetsList, setPlanetsList] = React.useState(props?.bodies)
    const [searchEngine, setSearchEngine] = useState(false);

    useEffect(()=>{
      {searchEngine ? planetsList :setPlanetsList(props?.bodies)}
    },)
 
    const handleRefresh = ()=>{
      window.location.reload();
    }
    const handleOnClick = (e:any) => {
        const findSearch:any = planetsList?.filter((planet : any)=>planet?.name.toLowerCase().includes(searchTerm.toLowerCase()) )
        setPlanetsList(findSearch)
        setSearchEngine(true)
   }
  
  return (
      <>
          <section id="searchEngine" role="search" style={{paddingTop:'20px', paddingBottom:'20px', textAlign:'center'}} aria-label="Search a planet">
            <Box component="span" m={1}>
            <input style={{padding:'10px'}} type="text" placeholder="Rechercher une planete" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value) } />
            <Button
              aria-label="Rechercher"
             style={{margin:'0 0 0 5px'}} 
              color='primary' 
              size="large"
              variant="contained" 
              disabled={!searchTerm} 
              onClick={handleOnClick} >
                Rechercher
              </Button>
            </Box>
            <Box style={{padding:'20px 0'}}>
              <Button color='secondary' size="medium" variant="contained" onClick={handleRefresh}>Clear</Button>
            </Box>
          </section>
         
         <main id="theContent">
         <article>
          <Container>
            <Grid container spacing={2}>
                {planetsList?.map((planet:any) => (
                         <Grid item xs={12} sm={6} md={3} key={planet.id}>
                          
                            {loadImg(planet.id)}
                            <Paper>
                              <PlanetCard planet={planet} img={img} id={planet.id}/>                          
                            </Paper>
                         
                      </Grid>
                  ))}
            </Grid>
          </Container>
          </article>
          </main>
      </>
    
  )
}

export default HomeTemplate
