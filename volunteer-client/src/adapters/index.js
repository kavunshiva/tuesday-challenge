const apiUrl = "http://localhost:3000/api/v1/"

export class VolunteersAdapter {
  static volunteers(){
    return fetch(`${apiUrl}volunteers`)
      .then(response => response.json())
  }
  static volunteer(id){
    return fetch(`${apiUrl}/volunteers/${id}`)
      .then(response => response.json())
  }
}

export class VotersAdapter {
  static getVotersByVolunteer(volunteer){
    return fetch(`${apiUrl}/volunteers/${volunteer.id}/voters`)
      .then(response => response.json())
  }
}
