<template>
  <div class="tournaments">
  <form @submit.prevent="handleSubmit">
    <label>
      <input type="text" v-model="search.string"/>
    </label>
    <button type="submit">Search</button>
  </form>
    <ul v-if="tournaments.length > 0">
      <li v-for="tourney of tournaments">
      	<p><strong>{{tourney.name}}</strong></p>
        <router-link :to="{ name: 'singleT', params: {id: tourney.id}}">See details</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import tourneys from '@/services/tourneys';
export default {
  name: 'tournaments',
  data () {
    return {
      search: {
        string: ''
      },
      searchinput: 'Search tournaments',
    	tournaments: []
    }
  },
  methods: {
    handleSubmit(){
      console.log(this.search.string);
  	  if(this.search.string.length >= 1){
        tourneys.searchTournament(this.search.string)
          .then(Ts => {
            this.tournaments = Ts
          })
      }else{
        tourneys.getAllTournaments()
          .then(Ts => {
            this.tournaments = Ts
          })
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