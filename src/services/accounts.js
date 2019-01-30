import axios from 'axios'

class accounts{

  static createAccount (form) {

    console.log(form);
    return axios.post(`https://tfind-back.herokuapp.com/api/accounts`,form)
    //return axios.post(`http://localhost:3000/api/users`,form)
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log(e)
      })
  }


}

export default accounts;