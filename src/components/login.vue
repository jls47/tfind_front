<template>
  <div class="dropdown" v-bind:class="{ 'is-active': isActive }">
    <div class="dropdown-trigger">
      <button v-on:click="active()" class="button is-danger is-inverted" aria-haspopup="true" aria-controls="dropdown-menu3">Login</button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu3" role="menu">
      <div class="dropdown-content">
        <form @submit.prevent="handleSubmit">
          <label class="label">
          <div class="control">
            <input class = "input" type="text" v-model="params.name" placeholder="Username"/><br>
            <input class = "input" type="password" v-model="params.password" placeholder="Password"/>
          </div>
          </label><br>
          <button class = "button is-danger" type="submit">Login</button>
        </form>
        <article v-if="this.error == true" class="message is-danger">
          <div class="message-body">
            Username or password are incorrect.  Try again!
          </div>
        </article>
        <article v-if="this.notActivated == true" class="message is-warning">
          <div class="message-body">
            Looks like this account hasn't been activated yet.  Check your email for the verification link!
          </div>
        </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import accounts from '@/services/accounts';
import store from '../main.js';
import { mapActions } from 'vuex';
export default {
  name: 'login',
  data () {
    return {
    isActive: false,
    notActivated: null,
    error: false,
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
          .then( data => {
            if(data){
              console.log(data);
              if(data.data.status == 'success'){
                if(data.data.user.active == false){
                  console.log('nope')
                  this.notActivated = true;
                  this.$emit('inactive');
                }else{
                  this.notActivated = true;
                  this.login(data.data.user[0]);
                  this.notActivated = false;
                  this.$emit('log');
                  if(localStorage.getItem("cookiesGood") == "true"){
                    localStorage.setItem("userDetails", JSON.stringify({name: data.data.user.name, id:   data.data.user.id, torg: data.data.user.torg}));
                  }
                }
              }else{
                this.error = true;
              }
            }else{
              this.error = true;
            }
          })
      }
    },
    active(){
      if(this.isActive == false){
        this.isActive = true;
      }else{
        this.isActive = false;
      }
    },
    ...mapActions([
      'login'
    ])
  }

}
</script>

<style lang="scss">
  .control{
    width: 80%;
    margin-left: 10%;
  }
  .dropdown-menu{
      width: 150px;
      margin-left: -100%;
  }
	li{
		list-style-type: none;
	}
</style>