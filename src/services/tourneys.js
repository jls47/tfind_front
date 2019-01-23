import axios from 'axios'

class tourneys {
  static getAllTournaments () {
  	//return axios.get(`https://tfind-back.herokuapp.com/api/tournaments`)
  	return axios.get(`http://localhost:3000/api/tournaments`)
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
  	return axios.get(`http://localhost:3000/api/tournaments/` + id)
  	  .then(response => {
  	  	this.tournament = response.data['data'];
  	  	return this.tournament;
  	  })
  	  .catch(e => {
  	  	console.log(e)
  	  })
  }
  	
  static searchTournament (term) {
	//return axios.get(`https://tfind-back.herokuapp.com/api/tournaments/search/` + term)
	return axios.get(`http://localhost:3000/api/tournaments/search/` + term)  
	  .then(response => {
	  	this.tournaments = response.data['data'];
	  	return this.tournaments;
	  })
	  .catch(e => {
	  	console.log(e)
	  })	
	}
  
  static createTournament (form) {
  	//return axios.post(`https://tfind-back.herokuapp.com/api/tournaments`,form)
  	return axios.post(`http://localhost:3000/api/tournaments`,form)
  	  .then(response => {
  	    console.log(response);
  	  })
  	  .catch(e => {
  	  	console.log(e)
  	  })
  }

  static editTournament (form) {
  	//return axios.put(`https://tfind-back.herokuapp.com/tournaments`, form)
  	return axios.put(`http://localhost:3000/api/tournaments`, form)
  	  .then(response => {
  	  	console.log(response);
  	  })
  	  .catch(e => {
  	  	console.log(e)
  	  })
  }
}


export default tourneys;