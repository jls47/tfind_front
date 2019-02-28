<template>
<div>
  <nav class="navbar is-danger">
    <div class="navbar-start">
      <a class="navbar-item" href="https://www.jlukes.com/tfind">
        Logo
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <div v-if="this.loginStatus == false">
            <login @log="onLog"></login>
            <button class="button is-danger is-inverted" @click = "openModal">Sign Up</button>
          </div>
          <div v-else>
            <logout @out="onLog"></logout>
          </div>
        </div>
      </div>
    </div>  
  </nav>

  <div v-if = "this.registration == true" class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
        <register></register>
    </div>
    <button class="modal-close is-large" aria-label="close" @click = "closeModal"></button>
  </div>

  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if="">
      <tourneys></tourneys>
    </div>
  </div>

</div>
</template>

<script>
import { serverBus } from '../main';
import Tournaments from '@/components/Tournaments';
import register from '@/components/register';
import login from '@/components/login';
import logout from '@/components/logout';
import store from '../main.js';

      
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Test your might!',
      loginStatus: '',
      registration: false
    }
  },
  created(){
    serverBus.$on('clicked', (msg) => {
      this.msg = msg;
    });
  },
  components:{
    tourneys: Tournaments,
    register: register,
    login: login,
    logout: logout
  },
  mounted(){
    console.log(store.state)
    this.loginStatus = store.state.loggedIn
  },
  methods: {
    onLog(){
      this.loginStatus = store.state.loggedIn
    },
    openModal(){
      this.registration = true;
    },
    closeModal(){
      this.registration = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = "scss" scoped>
.hello{
  margin-top: 100px;
}
.navbar-start{
  margin-left: 10%;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
