
export async function GetApi() {
    let response = await fetch(`https://api.le-systeme-solaire.net/rest.php/bodies?filter%5B%5D=isPlanet%2Ceq%2Ctrue`)
      let result = await response.json();
      return result
}



export async function GetThePlanet(id) {
    let response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${id}`)
    let result = await response.json();
    return result
}




