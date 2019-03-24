<template>
  <div class="tournaments">
    <div v-if="this.submitted == false">
    <form @submit.prevent="handleSubmit">
      <label>
        <div class="field">
          <div class="control">
            <input class = "input is-danger" type="text" v-model="user.name" placeholder="Name"/><br>
            <input class = "input is-danger" type="text" v-model="user.email" placeholder="Email Address"/><br>
            <input class = "input is-danger" type="text" v-model="user.region" placeholder="Region"/><br>
            <input class = "input is-danger" type="password" v-model="user.password" placeholder="Password"/><br>
            <input class = "input is-danger" type="password" v-model="password2" placeholder="Confirm Password"/><br>
            <p class = "modalP" v-if="user.password != password2 && password2">Passwords do not  match!</p><br>
            <label class="checkbox">
              <input type="checkbox" v-model="user.torg"/>
              <p class="modalP">Are you an organizer?</p>
            </label>
      </div>
      </div>
        </label>
    <br>
    <button type="submit">Create</button>

  </form>
  </div>
  <div v-if="this.submitted == true">
    <p class="modalP">Your details have been submitted and a confirmation email should be on its way to {{this.user.email}}.</p>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import accounts from '@/services/accounts';
export default {
  name: 'register',
  data () {
    return {
      user: {
        name: '',
        region: '',
        torg: false,
        password: '',
        email: ''
      },
      password2: '',
      submitted: false,
      hasErrors: false,
      errors: {
        name: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    handleSubmit(){
      console.log(this.user);
  	  if(this.checkForm() == true){
        accounts.createAccount(this.user)
        this.submitted = true;
      }
    },
    checkForm(){
      this.errors = {};
      if(!this.user.name){
        this.errors.username = 'Username needed!';
      }
      if(!this.user.password || this.user.password != this.password2){
        this.errors.password = 'Problems with the password!';
      }
      if(!this.user.email || !this.validEmail(this.user.email)){
        this.errors.email = 'Needs a valid email!';
      }

      if(!this.errors.length){
        return true;
      }else{
        this.hasErrors = true;
      }
    },
    validEmail(email){
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }

}
</script>

<style lang="scss">
	li{
		list-style-type: none;
	}
  .modalP{
    color: white;
  }
</style>