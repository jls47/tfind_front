<template>
  <div class="tournaments">
    <div v-if="status == 'OK'" class="success">
      Now you can login!
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
      status: ''
    }
  },
  mounted(){
    if(this.$route.params.hash){
      console.log(this.$route.params.hash +'aaa');
      let hash = {hash: this.$route.params.hash}
      accounts.activateAccount(hash)
        .then(response => {
          this.status = response;
        })
    }
  },
  methods: {
    handleSubmit(){
  	  
    }
  }

}
</script>

<style lang="scss">
	li{
		list-style-type: none;
	}
</style>