<template>
  <div class="tournaments">
  <p>AAAA</p>
    <ul v-if="tournaments.length > 0">
      <li v-for="tourney of tournaments">
      	<p><strong>{{tourney.name}}</strong></p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'tournaments',
  data () {
    return {
    	tournaments: []
    }
  },
  created(){
  	axios.get(`http://localhost:3000/api/tournaments`)
  	.then(response => {
  		console.log(response.data['data']);
  		this.tournaments = response.data['data'];
  		console.log(this.tournaments);
  	})
  	.catch(e => {
  		this.errors.push(e)
  	})
  }

}
</script>

<style>
	li{
		list-style-type: none;
	}
</style>