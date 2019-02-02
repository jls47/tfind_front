<template>
  <div class="tournaments">
  <form @submit.prevent="handleSubmit">
    <label>
      <input type="text" v-model="params.name" placeholder="Name"/><br>
      <input type="text" v-model="params.password" placeholder="Password"/>
    </label><br>
    <button type="submit">Login</button>
  </form>
  </div>
</template>

<script>
import axios from 'axios';
import accounts from '@/services/accounts';
export default {
  name: 'login',
  data () {
    return {
     params: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit(){
  	  if(this.params){
        accounts.login(this.params)
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