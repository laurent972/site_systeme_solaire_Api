import {  AppBar, Box, Button, Container, Grid, Paper } from '@material-ui/core'
import React, { FC,  useEffect, useState } from 'react'
import PlanetCard from '../../components/PlanetCard'

import {Body} from '../../types/planets'

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
   
   let img = "https://media.lesechos.com/api/v1/images/view/61fd23998fe56f101b3e4540/1280x720/070887130090-web-tete.jpg";

   const loadImg = (planetName:string) => {
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
      <>
          <section id="searchEngine" role="searchEngine" style={{paddingTop:'20px', paddingBottom:'20px', textAlign:'center'}} aria-label="Search a planet">
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
          <Container>
            <Grid container spacing={2}>
                {planetsList?.map((planet:any) => (
                         <Grid item xs={12} sm={6} md={3} key={planet.id}>
                          <article role="planetInfos" aria-label="Article planet">
                            {loadImg(planet.id)}
                            <Paper>
                              <PlanetCard planet={planet} img={img} id={planet.id}/>                          
                            </Paper>
                          </article>
                      </Grid>
                  ))}
            </Grid>
          </Container>
          </main>
      </>
    
  )
}

export default HomeTemplate
