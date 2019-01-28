<template>

  <div class="hello">

    <h1>{{ msg }}</h1>
    <tourneys></tourneys>
  </div>
</template>

<script>
import { serverBus } from '../main';
import Tournaments from '@/components/Tournaments';
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
    tourneys: Tournaments
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = "scss" scoped>
.hello{
  margin-top: 100px;
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
