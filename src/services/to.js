import axios from 'axios'

class tos {
  static getAllTournaments () {
  	//return axios.get(`https://tfind-back.herokuapp.com/api/tournaments`)
  	return axios.get(`http://localhost:3000/api/tournaments`)
  	  .then(response => {
  		  this.tournaments = response.data['data'];
  		  console.log(this.tournaments);
  		  return this.tournaments;
  	  })
  	  .catch(e => {
  		  this.errors.push(e)
  	  })
  	}
  	
  static getOneTournament (term){
  	
  }

  static searchTournament (term) {
	//return axios.get(`https://tfind-back.herokuapp.com/api/tournaments/search/` + term)
	return axios.get(`http://localhost:3000/api/tournaments/search/` + term)  
	  .then(response => {
	  	this.tournaments = response.data['data'];
	  	return this.tournaments;
	  })
	  .catch(e => {
	  	this.errors.push(e)
	  })	
	}
  
  static createTO (form) {
  	//axios.post(`https://tfind-back.herokuapp.com/api/tournaments`,form)
  	return axios.post(`http://localhost:3000/api/tos`,form)
  	  .then(response => {
  	    console.log(response);
  	  })
  	  .catch(e => {
  	  	console.log(e)
  	  })

  }
}


export default tos;