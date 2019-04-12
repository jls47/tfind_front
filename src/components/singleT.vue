<template>
  <div class="tournaments">

    <div v-if="tournament.length > 0">
      <p><strong>{{tournament[0].name}}</strong></p>
      <p>{{ tournament[0].torg }}</p>
      <div v-for="series in tournament[0].series">
        <p>{{series}}</p>
      </div>
      <div v-for="game in tournament[0].games">
        <p>{{game}}</p>
      </div>
      <p>{{ tournament[0].address }}</p>
      <p>{{ tournament[0].size }}</p>
    </div>

        <form v-if="editing == true" @submit.prevent="">
          <label>
            <input type="text" v-model="form.name" default = "tournament[0].name"/>
            <input type="text" v-model="form.region" default = "tournament[0].region"/>
            <input type="text" v-model="form.address" default = "tournament[0].address"/>
            <input type="text" v-model="form.torg" default = "tournament[0].torg"/>
            <input type="text" v-model="form.size" default = "tournament[0].size"/>
            <input type="text" v-model="form.entrycond" default = "tournament[0].entrycond"/>
            <input type="text" v-model="form.games" default = "tournament[0].games"/>
            <input type="text" v-model="form.series" default = "tournament[0].series"/>
          </label>
          <button type="submit">Create</button>
        </form>
  </div>
</template>

<script>
import axios from 'axios';
import tourneys from '@/services/tourneys';
export default {
  name: 'tournaments',
  data () {
    return {
      form: {
        name: '',
        region: '',
        address: '',
        torg: '',
        size: '',
        entrycond: '',
        games: [],
        series: []
      },
      searchinput: 'Search tournaments',
    	tournament: {},
      editing: false,
      id: this.$route.params.id
    }
  },
  created(){
    console.log(this.id + " id");
    tourneys.getOneTournament(this.id)
      .then(T => {
        this.tournament = T
      })
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