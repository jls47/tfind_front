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

  static login (form){
    console.log(form.name);
    return axios.get(`https://tfind-back.herokuapp.com/api/users`, {
      params: {
        name: form.name,
        password: form.password
      }
    })
    //return axios.get(`http://localhost:3000/login`, {
      //params: {
        //name: form.name,
        //password: form.password
      //}
    //})
      .then(response => {
        console.log(response);
        return response;
      })
      .catch(e => {
        console.log(e);
      })
  }


}

export default accounts;