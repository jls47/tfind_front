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
          <a class="button is-danger is-inverted">Login</a>
          <a class="button is-danger is-inverted">Sign Up</a>
        </div>
      </div>
    </div>  
  </nav>

  <div class="hello">

    <h1>{{ msg }}</h1>
    <tourneys></tourneys>
    <register></register>
  </div>

</div>
</template>

<script>
import { serverBus } from '../main';
import Tournaments from '@/components/Tournaments';
import register from '@/components/register';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Test your might!'
    }
  },
  created(){
    serverBus.$on('clicked', (msg) => {
      this.msg = msg;
    });
  },
  components:{
    tourneys: Tournaments,
    register: register
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
