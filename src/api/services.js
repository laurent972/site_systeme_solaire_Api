
export async function GetApi() {
    let response = await fetch(`https://api.le-systeme-solaire.net/rest.php/bodies?filter%5B%5D=isPlanet%2Ceq%2Ctrue`)
      if (response.ok) {
        let result = await response.json();
        return result
      }
    
}



export async function GetThePlanet(id) {
    let response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${id}`)
    if (response.ok) {
        let result = await response.json();
        return result
      }
}

export let img =''
export function loadImg (planetName){
  console.log(planetName);
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
  console.log(img);
}   


