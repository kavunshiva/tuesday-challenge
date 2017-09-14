const apiUrl = "http://localhost:3000/api/v1/volunteers"

export default class VolunteersAdapter {
  static volunteers(){
    return fetch(apiUrl)
      .then(response => response.json())
  }
  static volunteer(id){
    return fetch(`${apiUrl}/${id}`)
      .then(response => response.json())
  }
}
