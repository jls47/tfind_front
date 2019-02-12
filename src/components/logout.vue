<template>
  <div class="logout">
    <button class="button is-danger is-inverted" @click="logOut">Sign Out</button>
  </div>
</template>

<script>
import axios from 'axios';
import store from '../main.js'
import { mapActions } from 'vuex'
export default {
  name: 'logout',
  data () {
    return {
    }
  },
  methods: {
    logOut(){
  	  this.logout();
      this.$emit('out')
    },
    ...mapActions([
      'logout'
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