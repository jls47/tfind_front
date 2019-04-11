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
          <div v-if="this.loginStatus == true && this.TOstatus == true">
            <router-link tag="a" to="/create"><button class="button is-danger is-inverted">Create Tournament</button></router-link>
          </div>
        </div>
      </div>
      <div class="navbar-item">
        <div class="buttons">
          <div v-if="this.loginStatus == false">
            <login @log="onLog" @inactive="inactive"></login>
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

  <div class="hello container">
    <h1>{{ msg }}</h1>
    <div v-if="">
      <tourneys></tourneys>
    </div>
  </div>

  <div v-if="cookieStatus == null">
    <cookieNotifier></cookieNotifier>
  </div>
</div>
</template>

<script>
import Tournaments from '@/components/Tournaments';
import cookieNotifier from '@/components/cookieNotifier';
import register from '@/components/register';
import login from '@/components/login';
import logout from '@/components/logout';
import store from '../main.js';
import { mapActions } from 'vuex';

      
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Test your might!',
      loginStatus: this.$store.getters.loginStatus,
      registration: false,
      TOstatus: this.$store.getters.loginDetails.TO,
      cookieStatus: localStorage.getItem("cookiesGood")
    }
  },
  components:{
    tourneys: Tournaments,
    register: register,
    login: login,
    logout: logout,
    cookieNotifier: cookieNotifier
  },
  beforeMount(){
    this.checkCookies();
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
    },
    checkCookies(){
      if(localStorage.getItem("userDetails") != null){
        
        this.login(JSON.parse(localStorage.getItem("userDetails")));
      }
    },
    inactive(){
      alert("You still haven't activated your account!  Check your email for the verification message and click the link.");
    },
    //needs details.id, .name, .to; maybe at some point region for automatic result gathering on front page?
    ...mapActions([
      'login'
    ])
  },
  computed: {
    TO(){
      this.TOstatus = this.$store.getters.loginDetails.TO;
    }
  },
  watch: {
    TO(){
      return this.TOstatus;
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
