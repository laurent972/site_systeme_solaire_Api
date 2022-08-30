
export async function GetApi() {
    let response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/`)
      let result = await response.json();
      return result
}



export async function GetThePlanet(id) {
    let response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${id}`)
    let result = await response.json();
    return result
}




