<template>
  <div class="tournaments">
  <form @submit.prevent="handleSubmit">
    <label>
      <div class="field">
        <div class="control">
          <input class = "input" id = "tSearch" type="text" v-model="search.string"/><br><button class = "button is-danger" type="submit" @click="clicked1">Search</button>
        </div>
      </div>
    </label>
    
    <p v-if="search.string">Searching for "{{search.string}}"</p>
  </form>
  
    <ul v-if="tournaments.length > 0">
      <gmap :tourneys="tournaments"></gmap>
      <li v-for="tourney of tournaments">
      	<p><strong>{{tourney.name}}</strong></p>
        <router-link :to="{ name: 'singleT', params: {id: tourney.id}}">See details</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { serverBus } from '../main';
import tourneys from '@/services/tourneys';
import gMap from '@/components/gMap';
export default {
  name: 'tournaments',
  data () {
    return {
      search: {
        string: '',
        string2: ''
      },
      searchinput: 'Search tournaments',
    	tournaments: []
    }
  },
  components: {
    gmap: gMap
  },
  methods: {
    clicked1(){
      serverBus.$emit('clicked', this.search.string2)
    },
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
  #tSearch{
    width: 60%;
    margin-left: 0%;
  }
  .control{
    text-align: center;
  }
</style>