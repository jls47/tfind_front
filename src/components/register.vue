<template>
  <div class="tournaments">
  <form @submit.prevent="handleSubmit">
    <label>
      <input type="text" v-model="user.name" placeholder="Name"/><br>
      <input type="text" v-model="user.email" placeholder="Email Address"/><br>
      <input type="text" v-model="user.region" placeholder="Region"/><br>
      <input type="password" v-model="user.password" placeholder="Password"/><br>
      <input type="password" v-model="password2" placeholder="Confirm Password"/><br>
      <p v-if="user.password != password2">Passwords do not match!</p><br>
      <input type="checkbox" id="torg" value="true" v-model="user.torg"/>
      <label for="torg">Are you an organizer?</label>
    </label><br>
    <button type="submit">Create</button>
  </form>
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
        torg: 'false',
        password: ''
      },
      password2: ''
    }
  },
  methods: {
    handleSubmit(){
      console.log(this.user);
  	  if(this.user){
        accounts.createAccount(this.user)
      }
    }
  }

}
</script>

<style lang="scss">
	li{
		list-style-type: none;
	}
</style>