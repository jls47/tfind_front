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
  
    <ul v-if="tournaments.length > 0" class="results">
      <button v-if="redoMapSearch == true" class="map button is-danger" @click="newBoundSearch">Update results</button><br><br>
      <gmap :tourneys="tournaments" @moved="offerUpdateSearch" class="map"></gmap>
      <li v-for="tourney of tournaments" class="entry">
      	<p><strong>{{tourney.name}}</strong></p>
        <p>{{tourney.address}}</p>
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
        location: ''
      },
      searchinput: 'Search tournaments',
    	tournaments: [],
      filtering: false,
      redoMapSearch: false,
      mapMovements: 0,
      bounds: {
        SW : {
          lat: 0,
          lng: 0
        },
        NE: {
          lat: 0,
          lng: 0
        }
      }
    }
  },
  components: {
    gmap: gMap
  },
  methods: {
    offerUpdateSearch(data){
      this.mapMovements += 1;
      if(this.mapMovements > 1){
        console.log(data);
        this.bounds.NE.lat = data.ma.l;
        this.bounds.NE.lng = data.ga.l;
        this.bounds.SW.lat = data.ma.j;
        this.bounds.SW.lng = data.ga.j;
        this.redoMapSearch = true;
      }
    },
    clicked1(){
      serverBus.$emit('clicked', this.search.string2)
    },
    newBoundSearch(){
      console.log(this.bounds);
      tourneys.getTournamentsByCoordinates(this.bounds)
        .then(Ts => {
          this.tournaments = Ts
        })
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
  .entry{
    margin-bottom: 2%;
  }
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
  .map{
    float: right;
  }
  .results{
    width: 80%;
    margin-left: 0%;
    margin-right: 10%;
  }
</style>