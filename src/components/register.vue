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
      submitted: false
    }
  },
  methods: {
    handleSubmit(){
      console.log(this.user);
  	  if(this.user){
        accounts.createAccount(this.user)
        this.submitted = true;
      }
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