import axios from 'axios'

class accounts{

  static createAccount (form) {

    console.log(form);
    return axios.post(`https://tfind-back.herokuapp.com/api/users`,form)
    //return axios.post(`http://localhost:3000/api/users`,form)
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      })
  }

  static activateAccount (hash) {
    console.log(hash);
    return axios.put(`https://tfind-back.herokuapp.com/api/users`, hash)
    //return axios.put(`http://localhost:3000/api/users`,hash)
      .then(response => {
        console.log(response.statusText);
        return response.statusText;
      })
      .catch(e => {
        console.log(e);
      })
  }


}

export default accounts;