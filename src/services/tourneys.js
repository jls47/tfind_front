import axios from 'axios'

class tourneys {
  static getAllTournaments() {
  	return axios.get(`https://tfind-back.herokuapp.com/api/tournaments`)
  	//return axios.get(`http://localhost:3000/api/tournaments`)
  	  .then(response => {
  		  this.tournaments = response.data['data'];
  		  console.log(this.tournaments);
  		  return this.tournaments;
  	  })
  	  .catch(e => {
  	  	  console.log(e)
  		  this.errors.push(e)
  	  })
  	}

  static getOneTournament(id){
    return axios.get(`https://tfind-back.herokuapp.com/api/tournaments/` + id)
  	//return axios.get(`http://localhost:3000/api/tournaments/` + id)
  	  .then(response => {
  	  	this.tournament = response.data['data'];
  	  	return this.tournament;
  	  })
  	  .catch(e => {
  	  	console.log(e)
  	  })
  }
  	
  static searchTournament (term) {
	  return axios.get(`https://tfind-back.herokuapp.com/api/tournaments/search/` + term)
	  //return axios.get(`http://localhost:3000/api/tournaments/search/` + term)  
	    .then(response => {
	  	  this.tournaments = response.data['data'];
	  	  return this.tournaments;
	    })
	    .catch(e => {
	  	  console.log(e)
	    })	
	}
  
  static createTournament (form) {
  	return axios.post(`https://tfind-back.herokuapp.com/api/tournaments`,form)
  	//return axios.post(`http://localhost:3000/api/tournaments`,form)
  	  .then(response => {
  	    console.log(response);
  	  })
  	  .catch(e => {
  	  	console.log(e)
  	  })
  }

  static editTournament (form) {
  	return axios.put(`https://tfind-back.herokuapp.com/tournaments`, form)
  	//return axios.put(`http://localhost:3000/api/tournaments`, form)
  	  .then(response => {
  	  	console.log(response);
  	  })
  	  .catch(e => {
  	  	console.log(e)
  	  })
  }

  static getCoords (address){
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=
      `+address+`&key=AIzaSyBhbN6rJ1_e8abY-PLQrsC7Af5IaA3i9Mo`)
      .then(response => {
        return {"formatted": response.data.results[0].formatted_address, 
        "coords": response.data.results[0].geometry.location};
      })
      .catch(e => {
        console.log(e);
      })
  }

  //This is only working locally.  Figure out why.

  static getTournamentsByCoordinates(coords){
    return axios.get(`https://tfind-back.herokuapp.com/api/tournaments/coords`, {
    //return axios.get(`http://localhost:3000/api/tournaments/coords`, {
      params: coords
    })
      .then(response => {
        this.tournaments = response.data['data'];
        return this.tournaments;
      })
      .catch(e => {
        console.log(e);
      })
  }
}


export default tourneys;